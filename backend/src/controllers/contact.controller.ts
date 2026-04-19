import type { Request, Response } from "express";
import {
  readContactPeople,
  writeContactPeople,
  deleteContactPersonById,
} from "../services/contact.service.js";
import type { ContactPerson } from "../types/contact.js";

export async function getContactPeople(req: Request, res: Response) {
  try {
    const data = await readContactPeople();
    return res.json(data);
  } catch (error) {
    console.error("Failed to get contact people:", error);
    return res.status(500).json({ error: "Failed to load contact people" });
  }
}

export async function updateContactPeople(
  req: Request<{}, {}, ContactPerson[]>,
  res: Response
) {
  try {
    const people = req.body;

    await writeContactPeople(people);

    return res.json({ success: true });
  } catch (error) {
    console.error("Failed to update contact people:", error);
    return res.status(500).json({ error: "Failed to save contact people" });
  }
}

export async function deleteContactPerson(
  req: Request<{ id: string }>,
  res: Response
) {
  try {
    const { id } = req.params;

    const deleted = await deleteContactPersonById(id);

    if (!deleted) {
      return res.status(404).json({ error: "Contact person not found" });
    }

    return res.json({ success: true });
  } catch (error) {
    console.error("Failed to delete contact person:", error);
    return res.status(500).json({ error: "Failed to delete contact person" });
  }
}