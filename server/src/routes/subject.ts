import { Router } from "express";
import subjectController from "../controllers/subject";

const router = Router();

router.post("/", (req, resp) => subjectController.create(req, resp));
router.get("/", (req, resp) => subjectController.get(req, resp));
router.get("/list", (req, resp) => subjectController.getAll(req, resp));
router.put("/", (req, resp) => subjectController.update(req, resp));
router.delete("/", (req, resp) => subjectController.remove(req, resp));

export default router;
