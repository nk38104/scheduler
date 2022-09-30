import { Router } from "express";
import timetableController from "../controllers/timetable";

const router = Router();

router.post("/", (req, resp) => timetableController.create(req, resp));
router.get("/:id", (req, resp) => timetableController.get(req, resp));
router.put("/:id", (req, resp) => timetableController.update(req, resp));
router.delete("/:id", (req, resp) => timetableController.remove(req, resp));

export default router;
