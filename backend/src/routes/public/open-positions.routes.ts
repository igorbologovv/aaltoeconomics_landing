import { Router } from "express";
import {
  getPublicOpenPosition,
  listPublicOpenPositions,
} from "../../controllers/open-positions.controller.js";

const router = Router();

router.get("/", listPublicOpenPositions);
router.get("/:id", getPublicOpenPosition);

export default router;