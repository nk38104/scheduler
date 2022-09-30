import classController from "../controllers/class";
import { Router } from "express";

const router = Router();

router.post("/", (req, resp) => classController.create(req, resp));
router.get("/:id", (req, resp) => classController.get(req, resp));
router.get("/", (req, resp) => classController.getAll(req, resp));
router.put("/:id", (req, resp) => classController.update(req, resp));
router.delete("/:id", (req, resp) => classController.remove(req, resp));

export default router;
