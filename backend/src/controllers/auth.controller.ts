import type { Request, Response } from "express";
import { env } from "../config/env.js";
import {
  changeAdminPassword,
  createInitialAdmin,
  getAdminCount,
  signAdminToken,
  verifyAdminCredentials,
} from "../services/auth.service.js";
import type {
  ChangePasswordBody,
  LoginAdminBody,
  RegisterAdminBody,
} from "../types/auth.js";

function isStrongEnough(password: string): boolean {
  return password.length >= 10;
}

export async function registerInitialAdminHandler(
  req: Request<{}, {}, RegisterAdminBody>,
  res: Response
) {
  const { username, password, setupSecret } = req.body;

  if (!username || !password || !setupSecret) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  if (setupSecret !== env.adminSetupSecret) {
    return res.status(403).json({ message: "Forbidden" });
  }

  if (!isStrongEnough(password)) {
    return res.status(400).json({
      message: "Password must be at least 10 characters long",
    });
  }

  const adminCount = await getAdminCount();

  if (adminCount > 0) {
    return res.status(409).json({ message: "Admin already exists" });
  }

  const admin = await createInitialAdmin(username, password);

  const token = signAdminToken({
    adminId: admin.id,
    username: admin.username,
  });

  return res.status(201).json({
    message: "Initial admin created",
    token,
  });
}

export async function loginAdminHandler(
  req: Request<{}, {}, LoginAdminBody>,
  res: Response
) {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: "Missing credentials" });
  }

  const admin = await verifyAdminCredentials(username, password);

  if (!admin) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const token = signAdminToken({
    adminId: admin.id,
    username: admin.username,
  });

  return res.status(200).json({ token });
}

export async function meAdminHandler(req: Request, res: Response) {
  return res.status(200).json({
    authenticated: true,
    admin: req.admin,
  });
}

export async function changePasswordHandler(
  req: Request<{}, {}, ChangePasswordBody>,
  res: Response
) {
  const admin = req.admin;

  if (!admin) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const { currentPassword, newPassword } = req.body;

  if (!currentPassword || !newPassword) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  if (!isStrongEnough(newPassword)) {
    return res.status(400).json({
      message: "New password must be at least 10 characters long",
    });
  }

  const result = await changeAdminPassword(
    admin.adminId,
    currentPassword,
    newPassword
  );

  if (!result.ok) {
    return res.status(401).json({ message: "Current password is incorrect" });
  }

  return res.status(200).json({
    message: "Password updated successfully",
  });
}