import { Router } from "express";
import { upload } from "../../utils/upload.util.js";
import { uploadImage } from "../../controllers/upload.controller.js";

const router = Router();

router.post("/", upload.single("file"), uploadImage);

export default router;