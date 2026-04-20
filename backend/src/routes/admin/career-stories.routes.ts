import { Router } from "express";
import {
  deleteCareerStory,
  getCareerStories,
  updateCareerStories,
} from "../../controllers/career-stories.controller.js";
import { requireAdminAuth } from "../../middleware/auth.middleware.js";

const router = Router();

router.get("/", requireAdminAuth, getCareerStories);
router.put("/", requireAdminAuth, updateCareerStories);
router.delete("/:id", requireAdminAuth, deleteCareerStory);

export default router;