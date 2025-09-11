import express from "express";
const router = express.Router();
import productController from "../controllers/productController.js";

// GET /products
router.get("/", productController.getAllProducts);

// GET /products/:id
router.get("/:id", productController.getProductById);

// POST /products
router.post("/", productController.createProduct);

export default router;
