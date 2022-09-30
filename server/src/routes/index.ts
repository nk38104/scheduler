import classroomRouter from "./classroom";
import { Router } from "express";
import subjectRouter from "./subject";
import timetableRouter from "./timetable";
import userRouter from "./user";

const router = Router();

router.use("/users", userRouter);
router.use("/timetables", timetableRouter);
router.use("/classrooms", classroomRouter);
router.use("/subjects", subjectRouter);

export default router;
