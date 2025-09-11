import express from "express";
const router = express.Router();
import productController from "../controllers/productController.js";

// GET /products
router.get("/", productController.getAllProducts);

// GET /products/:id
router.get("/:id", productController.getProductById);

// POST /products
router.post("/", productController.createProduct);

// PUT /products/:id
router.put("/:id", productController.updateProduct);

// DELETE /products/:id
router.delete("/:id", productController.deleteProduct);
export default router;
