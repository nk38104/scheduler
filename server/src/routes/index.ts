import { Router } from "express";
import timetableRouter from "./timetable";
import userRouter from "./user";

const router = Router();

router.use("/users", userRouter);
router.use("/timetables", timetableRouter);

export default router;
