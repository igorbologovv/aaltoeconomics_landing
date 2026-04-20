import { Router } from "express";
import {
  listMembershipApplications,
  patchMembershipApplicationStatus,
  removeMembershipApplication,
} from "../../controllers/membership.controller.js";
import { requireAdminAuth } from "../../middleware/auth.middleware.js";

const router = Router();

router.get("/", requireAdminAuth, listMembershipApplications);
router.patch("/:id/status", requireAdminAuth, patchMembershipApplicationStatus);
router.delete("/:id", requireAdminAuth, removeMembershipApplication);

export default router;