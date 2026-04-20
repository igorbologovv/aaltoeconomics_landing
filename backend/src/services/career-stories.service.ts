import path from "node:path";
import { promises as fs } from "node:fs";
import type { CareerStory } from "../types/career-story.js";

const CAREER_STORIES_FILE_PATH = path.resolve("src/data/careerStories.json");

function slugify(value: string): string {
  return value
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function normalizeStory(story: CareerStory): CareerStory {
  return {
    ...story,
    slug: story.slug?.trim() || slugify(story.name),
    order: story.order ?? 0,
  };
}

function validateStory(story: CareerStory): void {
  if (!story.id.trim()) {
    throw new Error("Story id is required");
  }

  if (!story.name.trim()) {
    throw new Error("Story name is required");
  }

  if (!story.role.trim()) {
    throw new Error("Story role is required");
  }

  if (!story.text.trim()) {
    throw new Error("Story text is required");
  }

  if (!story.slug.trim()) {
    throw new Error("Story slug is required");
  }
}

export async function getAllCareerStories(): Promise<CareerStory[]> {
  const raw = await fs.readFile(CAREER_STORIES_FILE_PATH, "utf-8");
  const stories = JSON.parse(raw) as CareerStory[];

  return stories
    .map(normalizeStory)
    .sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
}

export async function getCareerStoryBySlug(slug: string) {
  const stories = await getAllCareerStories();
  return stories.find((story) => story.slug === slug) ?? null;
}

export async function saveCareerStories(stories: CareerStory[]): Promise<void> {
  const normalizedStories = stories.map(normalizeStory);

  for (const story of normalizedStories) {
    validateStory(story);
  }

  const uniqueIds = new Set(normalizedStories.map((story) => story.id));
  const uniqueSlugs = new Set(normalizedStories.map((story) => story.slug));

  if (uniqueIds.size !== normalizedStories.length) {
    throw new Error("Story ids must be unique");
  }

  if (uniqueSlugs.size !== normalizedStories.length) {
    throw new Error("Story slugs must be unique");
  }

  await fs.writeFile(
    CAREER_STORIES_FILE_PATH,
    JSON.stringify(normalizedStories, null, 2),
    "utf-8"
  );
}

export async function deleteCareerStoryById(id: string): Promise<boolean> {
  const stories = await getAllCareerStories();
  const nextStories = stories.filter((story) => story.id !== id);

  if (nextStories.length === stories.length) {
    return false;
  }

  await saveCareerStories(nextStories);
  return true;
}