import { Router } from "express";
import { getContactPeople } from "../../controllers/contact.controller.js";

const router = Router();

router.get("/", getContactPeople);

export default router;