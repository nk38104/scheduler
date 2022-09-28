import classroomRouter from "./classroom";
import { Router } from "express";
import subjectRouter from "./subject";
import teacherRouter from "./teacher";
import timetableRouter from "./timetable";
import userRouter from "./user";

const router = Router();

router.use("/users", userRouter);
router.use("/timetables", timetableRouter);
router.use("/classrooms", classroomRouter);
router.use("/subjects", subjectRouter);
router.use("/teachers", teacherRouter);

export default router;
