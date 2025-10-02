import express from "express";
const router = express.Router();
import { login, register, getProfile } from "../controllers/authController.js";

// Đăng nhập
router.post("/login", login);

// Đăng ký
router.post("/register", register);

// Route test token
import authMiddleware from "../middlewares/auth.middleware.js";
router.get("/profile", authMiddleware, getProfile);

export default router;
