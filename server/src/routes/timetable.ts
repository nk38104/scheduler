import { Router } from "express";
import timetableController from "../controllers/timetable";

const router = Router();

router.post("/", (req, resp) => timetableController.create(req, resp));

export default router;
