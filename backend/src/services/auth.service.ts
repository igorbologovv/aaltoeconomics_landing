import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import type { SignOptions } from "jsonwebtoken";
import { pool } from "../db/pool.js";
import { env } from "../config/env.js";
import type { JwtPayload } from "../types/auth.js";

const SALT_ROUNDS = 12;

type AdminRow = {
  id: number;
  username: string;
  password_hash: string;
};

export async function getAdminCount(): Promise<number> {
  const result = await pool.query<{ count: number }>(
    `SELECT COUNT(*)::int AS count FROM admins`
  );

  return result.rows[0]?.count ?? 0;
}

export async function getAdminByUsername(username: string) {
  const result = await pool.query<AdminRow>(
    `
      SELECT id, username, password_hash
      FROM admins
      WHERE username = $1
      LIMIT 1
    `,
    [username]
  );

  return result.rows[0] ?? null;
}

export async function createInitialAdmin(username: string, password: string) {
  const passwordHash = await bcrypt.hash(password, SALT_ROUNDS);

  const result = await pool.query<{ id: number; username: string }>(
    `
      INSERT INTO admins (username, password_hash)
      VALUES ($1, $2)
      RETURNING id, username
    `,
    [username, passwordHash]
  );

  return result.rows[0];
}

export async function verifyAdminCredentials(
  username: string,
  password: string
) {
  const admin = await getAdminByUsername(username);

  if (!admin) {
    return null;
  }

  const isValid = await bcrypt.compare(password, admin.password_hash);

  if (!isValid) {
    return null;
  }

  return {
    id: admin.id,
    username: admin.username,
  };
}

export function signAdminToken(payload: JwtPayload) {
  return jwt.sign(payload, env.jwtSecret, {
    expiresIn: env.jwtExpiresIn as SignOptions["expiresIn"],
  });
}

export async function changeAdminPassword(
  adminId: number,
  currentPassword: string,
  newPassword: string
) {
  const result = await pool.query<Pick<AdminRow, "id" | "password_hash">>(
    `
      SELECT id, password_hash
      FROM admins
      WHERE id = $1
      LIMIT 1
    `,
    [adminId]
  );

  const admin = result.rows[0];

  if (!admin) {
    throw new Error("Admin not found");
  }

  const isValid = await bcrypt.compare(currentPassword, admin.password_hash);

  if (!isValid) {
    return { ok: false as const, reason: "INVALID_CURRENT_PASSWORD" as const };
  }

  const nextPasswordHash = await bcrypt.hash(newPassword, SALT_ROUNDS);

  await pool.query(
    `
      UPDATE admins
      SET password_hash = $1,
          updated_at = NOW()
      WHERE id = $2
    `,
    [nextPasswordHash, adminId]
  );

  return { ok: true as const };
}