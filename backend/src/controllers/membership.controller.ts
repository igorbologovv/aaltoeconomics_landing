import type { Request, Response } from "express";
import {
  createMembershipApplication,
  getMembershipApplications,
} from "../services/membership.service.js";
import type { CreateMembershipApplicationInput, School } from "../types/membership.js";

const allowedSchools = new Set<School>([
  "BIZ",
  "CHEM",
  "ELEC",
  "ENG",
  "SCI",
  "ARTS",
]);

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function submitMembershipApplication(req: Request, res: Response) {
  try {
    const {
      firstName,
      lastName,
      email,
      city,
      kyMembership,
      ayyMembership,
      school,
      major,
      consentAccepted,
    } = req.body as Partial<CreateMembershipApplicationInput>;

    if (!firstName?.trim()) {
      return res.status(400).json({ message: "First name is required." });
    }

    if (!lastName?.trim()) {
      return res.status(400).json({ message: "Last name is required." });
    }

    if (!email?.trim() || !isValidEmail(email)) {
      return res.status(400).json({ message: "A valid email is required." });
    }

    if (!city?.trim()) {
      return res.status(400).json({ message: "Municipality of residence is required." });
    }

    if (typeof kyMembership !== "boolean") {
      return res.status(400).json({ message: "KY membership must be selected." });
    }

    if (typeof ayyMembership !== "boolean") {
      return res.status(400).json({ message: "AYY membership must be selected." });
    }

    if (!school || !allowedSchools.has(school as School)) {
      return res.status(400).json({ message: "School is required." });
    }

    if (!major?.trim()) {
      return res.status(400).json({ message: "Major is required." });
    }

    if (consentAccepted !== true) {
      return res.status(400).json({
        message: "Consent to personal data processing and email communication is required.",
      });
    }

    const application = await createMembershipApplication({
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      email: email.trim(),
      city: city.trim(),
      kyMembership,
      ayyMembership,
      school: school as School,
      major: major.trim(),
      consentAccepted: true,
    });

    return res.status(201).json(application);
  } catch (error) {
    console.error("submitMembershipApplication error:", error);
    return res.status(500).json({ message: "Failed to submit membership application." });
  }
}

export async function listMembershipApplications(_req: Request, res: Response) {
  try {
    const applications = await getMembershipApplications();
    return res.status(200).json(applications);
  } catch (error) {
    console.error("listMembershipApplications error:", error);
    return res.status(500).json({ message: "Failed to load membership applications." });
  }
}