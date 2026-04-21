import { Router } from "express";
import multer from "multer";
import { requireAdminAuth } from "../../middleware/auth.middleware.js";
import { uploadImage } from "../../controllers/upload.controller.js";

const router = Router();

const upload = multer({
  storage: multer.memoryStorage(),
  fileFilter: (_, file, cb) => {
    if (file.mimetype.startsWith("image/")) {
      cb(null, true);
      return;
    }

    cb(new Error("Only image files are allowed"));
  },
});

router.post("/", requireAdminAuth, upload.single("file"), uploadImage);

export default router;