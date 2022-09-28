import { Router } from "express";
import userController from "../controllers/user";

const router = Router();

router.get("/", (req, resp) => userController.get(req, resp));
router.put("/", (req, resp) => userController.update(req, resp));

export default router;
