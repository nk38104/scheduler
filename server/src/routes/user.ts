import { Router } from "express";
import userController from "../controllers/user";

const router = Router();

router.get("/:id", (req, resp) => userController.get(req, resp));
router.put("/", (req, resp) => userController.update(req, resp));
router.delete("/", (req, resp) => userController.remove(req, resp));

export default router;
