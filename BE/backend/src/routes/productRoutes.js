import express from "express";
const router = express.Router();
import productController from "../controllers/productController.js";
import multer from "multer";
import path from "path";
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, '../uploads/products'));
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
  }
});

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 5 * 1024 * 1024 // 5MB limit
  },
  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith('image/')) {
      cb(null, true);
    } else {
      cb(new Error('Only image files are allowed!'), false);
    }
  }
});

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

// POST /products/upload
router.post("/upload", upload.single('image'), (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    const imageUrl = `/uploads/products/${req.file.filename}`;
    res.status(200).json({
      message: "Image uploaded successfully",
      imageUrl: imageUrl
    });
  } catch (error) {
    console.error("❌ Lỗi khi upload ảnh:", error.message);
    res.status(500).json({ error: "Server error" });
  }
});

export default router;
