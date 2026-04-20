import { Router } from "express";
import {
  updateContactPeople,
  deleteContactPerson,
} from "../../controllers/contact.controller.js";
import { requireAdminAuth } from "../../middleware/auth.middleware.js";

const router = Router();

router.put("/", requireAdminAuth, updateContactPeople);
router.delete("/:id", requireAdminAuth, deleteContactPerson);

export default router;