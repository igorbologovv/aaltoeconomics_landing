import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";
import type { Request, Response } from "express";
import { v4 as uuid } from "uuid";

const allowedUploadFolders = new Set([
  "contact",
  "partners",
  "career-stories",
  "open-positions",
]);

function getUploadFolder(req: Request) {
  const folder = String(req.body.folder || "contact");

  if (allowedUploadFolders.has(folder)) {
    return folder;
  }

  return "contact";
}

export async function uploadImage(req: Request, res: Response) {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    const folder = getUploadFolder(req);

    const uploadsDir = path.resolve("uploads", folder);
    await fs.mkdir(uploadsDir, { recursive: true });

    const filename = `${uuid()}.webp`;
    const outputPath = path.join(uploadsDir, filename);

    await sharp(req.file.buffer)
      .rotate()
      .resize({
        width: 1800,
        height: 1800,
        fit: "inside",
        withoutEnlargement: true,
      })
      .webp({
        quality: 82,
        effort: 6,
      })
      .toFile(outputPath);

    const url = `/uploads/${folder}/${filename}`;

    return res.json({ url });
  } catch (error) {
    console.error("Upload failed:", error);
    return res.status(500).json({ error: "Upload failed" });
  }
}