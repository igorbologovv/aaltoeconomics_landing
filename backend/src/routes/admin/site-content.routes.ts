import { Router } from "express";
import {
  getAdminSiteContent,
  putAdminSiteContent,
} from "../../controllers/site-content.controller.js";
import { requireAdminAuth } from "../../middleware/auth.middleware.js";

const router = Router();

router.get("/", requireAdminAuth, getAdminSiteContent);
router.put("/", requireAdminAuth, putAdminSiteContent);

export default router;