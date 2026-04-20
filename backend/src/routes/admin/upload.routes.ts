import { Router } from "express";
import { upload } from "../../utils/upload.util.js";
import { uploadImage } from "../../controllers/upload.controller.js";
import { requireAdminAuth } from "../../middleware/auth.middleware.js";

const router = Router();

router.post("/", requireAdminAuth, upload.single("file"), uploadImage);

export default router;