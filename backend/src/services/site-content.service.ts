import fs from "node:fs/promises";
import path from "node:path";
import type { SiteContent } from "../types/site-content.js";

const siteContentFilePath = path.resolve("src/data/siteContent.json");

export async function getSiteContent(): Promise<SiteContent> {
  const fileContent = await fs.readFile(siteContentFilePath, "utf-8");
  return JSON.parse(fileContent) as SiteContent;
}

export async function updateSiteContent(content: SiteContent): Promise<SiteContent> {
  await fs.writeFile(
    siteContentFilePath,
    JSON.stringify(content, null, 2) + "\n",
    "utf-8"
  );
  return getSiteContent();
}