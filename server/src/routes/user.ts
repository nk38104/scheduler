import { Router } from "express";
import userController from "../controllers/user";

const router = Router();

router.get("/", (req, resp) => userController.get(req, resp));

export default router;
