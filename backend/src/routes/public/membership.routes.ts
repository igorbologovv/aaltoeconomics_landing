import { Router } from "express";
import { submitMembershipApplication } from "../../controllers/membership.controller.js";

const router = Router();

router.post("/", submitMembershipApplication);

export default router;