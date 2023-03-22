import express from "express";
import { create, get, getAll, remove, update } from "../controllers/product";

const router = express.Router();
router.post("/product", create);
router.get("/product", getAll);
router.get("/product/:id", get);
router.patch("/product/:id", update);
router.delete("/product/:id", remove);
export default router;
