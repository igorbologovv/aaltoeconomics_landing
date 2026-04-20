import type { Request, Response } from "express";
import type { CareerStory } from "../types/career-story.js";
import {
  deleteCareerStoryById,
  getAllCareerStories,
  getCareerStoryBySlug,
  saveCareerStories,
} from "../services/career-stories.service.js";

export async function getCareerStories(req: Request, res: Response) {
  try {
    const stories = await getAllCareerStories();
    return res.status(200).json(stories);
  } catch (error) {
    console.error("Failed to get career stories:", error);
    return res.status(500).json({ message: "Failed to load career stories" });
  }
}

export async function getCareerStory(
  req: Request<{ slug: string }>,
  res: Response
) {
  try {
    const { slug } = req.params;
    const story = await getCareerStoryBySlug(slug);

    if (!story) {
      return res.status(404).json({ message: "Career story not found" });
    }

    return res.status(200).json(story);
  } catch (error) {
    console.error("Failed to get career story:", error);
    return res.status(500).json({ message: "Failed to load career story" });
  }
}

export async function updateCareerStories(
  req: Request<{}, {}, CareerStory[]>,
  res: Response
) {
  try {
    const stories = req.body;

    if (!Array.isArray(stories)) {
      return res.status(400).json({ message: "Expected an array of stories" });
    }

    await saveCareerStories(stories);

    return res
      .status(200)
      .json({ message: "Career stories updated successfully" });
  } catch (error) {
    console.error("Failed to update career stories:", error);

    const message =
      error instanceof Error ? error.message : "Failed to update career stories";

    return res.status(400).json({ message });
  }
}

export async function deleteCareerStory(
  req: Request<{ id: string }>,
  res: Response
) {
  try {
    const deleted = await deleteCareerStoryById(req.params.id);

    if (!deleted) {
      return res.status(404).json({ message: "Career story not found" });
    }

    return res
      .status(200)
      .json({ message: "Career story deleted successfully" });
  } catch (error) {
    console.error("Failed to delete career story:", error);
    return res.status(500).json({ message: "Failed to delete career story" });
  }
}