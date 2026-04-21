import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";
import type { Request, Response } from "express";
import { v4 as uuid } from "uuid";

export async function uploadImage(req: Request, res: Response) {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    const uploadsDir = path.resolve("uploads/contact");
    await fs.mkdir(uploadsDir, { recursive: true });

    const filename = `${uuid()}.jpg`;
    const outputPath = path.join(uploadsDir, filename);

    await sharp(req.file.buffer)
      .rotate()
      .resize({
        width: 1800,
        height: 1800,
        fit: "inside",
        withoutEnlargement: true,
      })
      .jpeg({
        quality: 94,
        mozjpeg: true,
      })
      .toFile(outputPath);

    const url = `/uploads/contact/${filename}`;

    return res.json({ url });
  } catch (error) {
    console.error("Upload failed:", error);
    return res.status(500).json({ error: "Upload failed" });
  }
}