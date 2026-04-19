import fs from "fs/promises";

export async function readJsonFile<T>(path: string): Promise<T> {
  const data = await fs.readFile(path, "utf-8");
  return JSON.parse(data) as T;
}

export async function writeJsonFile<T>(path: string, data: T) {
  await fs.writeFile(path, JSON.stringify(data, null, 2));
}