import path from "path";
import { readJsonFile, writeJsonFile } from "../utils/file.util.js";
import type { ContactPerson } from "../types/contact.js";

const FILE_PATH = path.resolve("src/data/contactPeople.json");

export async function readContactPeople(): Promise<ContactPerson[]> {
  return readJsonFile<ContactPerson[]>(FILE_PATH);
}

export async function writeContactPeople(data: ContactPerson[]) {
  return writeJsonFile(FILE_PATH, data);
}

export async function deleteContactPersonById(id: string): Promise<boolean> {
  const people = await readContactPeople();
  const nextPeople = people.filter((person) => person.id !== id);

  if (nextPeople.length === people.length) {
    return false;
  }

  await writeContactPeople(nextPeople);
  return true;
}