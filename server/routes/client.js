import express from "express";
import {getSuppliers, getProducts, getTransactions} from "../controllers/client.js";

const router = express.Router();

router.get("/products", getProducts);
router.get("/suppliers", getSuppliers);
router.get("/transactions", getTransactions);

export default router;