import { Router } from "express";
import { requireAdminAuth } from "../../middleware/auth.middleware.js";
import {
  listAdminOpenPositions,
  putAdminOpenPositions,
  removeAdminOpenPosition,
} from "../../controllers/open-positions.controller.js";

const router = Router();

router.get("/", requireAdminAuth, listAdminOpenPositions);
router.put("/", requireAdminAuth, putAdminOpenPositions);
router.delete("/:id", requireAdminAuth, removeAdminOpenPosition);

export default router;