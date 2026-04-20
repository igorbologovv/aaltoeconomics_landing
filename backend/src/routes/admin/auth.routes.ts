import { Router } from "express";
import {
  changePasswordHandler,
  loginAdminHandler,
  meAdminHandler,
  registerInitialAdminHandler,
} from "../../controllers/auth.controller.js";
import { requireAdminAuth } from "../../middleware/auth.middleware.js";

const router = Router();

router.post("/register", registerInitialAdminHandler);
router.post("/login", loginAdminHandler);
router.get("/me", requireAdminAuth, meAdminHandler);
router.post("/change-password", requireAdminAuth, changePasswordHandler);

export default router;