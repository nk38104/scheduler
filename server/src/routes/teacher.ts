import { Router } from "express";
import teacherController from "../controllers/teacher";

const router = Router();

router.post("/", (req, resp) => teacherController.create(req, resp));
router.get("/", (req, resp) => teacherController.get(req, resp));
router.get("/list", (req, resp) => teacherController.getAll(req, resp));
router.put("/", (req, resp) => teacherController.update(req, resp));
router.delete("/", (req, resp) => teacherController.remove(req, resp));

export default router;
