import classroomRouter from "./classroom";
import classRouter from "./class";
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
router.use("/classes", classRouter);

export default router;
