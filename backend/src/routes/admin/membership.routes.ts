import { Router } from "express";
import { listMembershipApplications } from "../../controllers/membership.controller.js";
import { requireAdminAuth } from "../../middleware/auth.middleware.js";

const router = Router();

router.get("/", requireAdminAuth, listMembershipApplications);

export default router;