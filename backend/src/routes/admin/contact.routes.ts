import { Router } from "express";
import {
  updateContactPeople,
  deleteContactPerson,
} from "../../controllers/contact.controller.js";

const router = Router();

router.put("/", updateContactPeople);
router.delete("/:id", deleteContactPerson);

export default router;