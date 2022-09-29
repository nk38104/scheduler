import { Router } from "express";
import subjectController from "../controllers/subject";

const router = Router();

router.post("/", (req, resp) => subjectController.create(req, resp));
router.get("/:id", (req, resp) => subjectController.get(req, resp));
router.get("/", (req, resp) => subjectController.getAll(req, resp));
router.put("/:id", (req, resp) => subjectController.update(req, resp));
router.delete("/:id", (req, resp) => subjectController.remove(req, resp));

export default router;
