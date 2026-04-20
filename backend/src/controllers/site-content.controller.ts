import type { Request, Response } from "express";
import { getSiteContent, updateSiteContent } from "../services/site-content.service.js";
import type { SiteContent } from "../types/site-content.js";

export async function getPublicSiteContent(_req: Request, res: Response) {
  try {
    const content = await getSiteContent();
    return res.status(200).json(content);
  } catch (error) {
    console.error("getPublicSiteContent error:", error);
    return res.status(500).json({ message: "Failed to load site content." });
  }
}

export async function getAdminSiteContent(_req: Request, res: Response) {
  try {
    const content = await getSiteContent();
    return res.status(200).json(content);
  } catch (error) {
    console.error("getAdminSiteContent error:", error);
    return res.status(500).json({ message: "Failed to load site content." });
  }
}

export async function putAdminSiteContent(req: Request, res: Response) {
  try {
    const content = req.body as SiteContent;
    const saved = await updateSiteContent(content);
    return res.status(200).json(saved);
  } catch (error) {
    console.error("putAdminSiteContent error:", error);
    return res.status(500).json({ message: "Failed to save site content." });
  }
}