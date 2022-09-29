import { Router } from "express";
import teacherController from "../controllers/teacher";

const router = Router();

router.post("/", (req, resp) => teacherController.create(req, resp));
router.get("/:id", (req, resp) => teacherController.get(req, resp));
router.get("/", (req, resp) => teacherController.getAll(req, resp));
router.put("/:id", (req, resp) => teacherController.update(req, resp));
router.delete("/:id", (req, resp) => teacherController.remove(req, resp));

export default router;
