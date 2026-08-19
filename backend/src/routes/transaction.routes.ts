import { Router } from "express";
import * as transactionController from "../controllers/transaction.controller";

const router = Router();

router.get("/", transactionController.getAll);
router.get("/:id", transactionController.getById);
router.post("/", transactionController.create);
router.put("/:id", transactionController.update);
router.patch("/:id", transactionController.update);
router.delete("/:id", transactionController.remove);

export default router;
