import { Router } from "express";
import {
  getCareerStories,
  getCareerStory,
} from "../../controllers/career-stories.controller.js";

const router = Router();

router.get("/", getCareerStories);
router.get("/:slug", getCareerStory);

export default router;