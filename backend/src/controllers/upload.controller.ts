import type { Request, Response } from "express";

export async function uploadImage(req: Request, res: Response) {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    const url = `/uploads/contact/${req.file.filename}`;

    return res.json({ url });
  } catch (error) {
    console.error("Upload failed:", error);
    return res.status(500).json({ error: "Upload failed" });
  }
}