import fs from "node:fs/promises";
import path from "node:path";
import type { OpenPosition } from "../types/open-position.js";

const openPositionsFilePath = path.resolve("src/data/openPositions.json");

async function readOpenPositionsFile(): Promise<OpenPosition[]> {
  const fileContent = await fs.readFile(openPositionsFilePath, "utf-8");
  const data = JSON.parse(fileContent) as OpenPosition[];

  if (!Array.isArray(data)) {
    throw new Error("openPositions.json must contain an array.");
  }

  return [...data].sort((a, b) => a.order - b.order);
}

async function writeOpenPositionsFile(positions: OpenPosition[]): Promise<void> {
  const sorted = [...positions].sort((a, b) => a.order - b.order);
  await fs.writeFile(
    openPositionsFilePath,
    JSON.stringify(sorted, null, 2) + "\n",
    "utf-8"
  );
}

export async function getOpenPositions(options?: {
  includeUnpublished?: boolean;
}): Promise<OpenPosition[]> {
  const positions = await readOpenPositionsFile();

  if (options?.includeUnpublished) {
    return positions;
  }

  return positions.filter((position) => position.isPublished);
}

export async function getOpenPositionById(id: string): Promise<OpenPosition | null> {
  const positions = await readOpenPositionsFile();
  return positions.find((position) => position.id === id) ?? null;
}

export async function updateOpenPositions(
  nextPositions: OpenPosition[]
): Promise<OpenPosition[]> {
  await writeOpenPositionsFile(nextPositions);
  return readOpenPositionsFile();
}

export async function deleteOpenPosition(id: string): Promise<OpenPosition[]> {
  const positions = await readOpenPositionsFile();
  const nextPositions = positions.filter((position) => position.id !== id);

  if (nextPositions.length === positions.length) {
    throw new Error("Open position not found.");
  }

  await writeOpenPositionsFile(nextPositions);
  return readOpenPositionsFile();
}