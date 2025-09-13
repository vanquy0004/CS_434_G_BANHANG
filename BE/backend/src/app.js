import express from "express";
import cors from "cors";
const app = express();

app.use(cors());
app.use(express.json());

// Import routes
import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";
// Sử dụng routes
app.use("/products", productRoutes);
app.use("/users", userRoutes);

// Import routes
import authRoutes from "./routes/authRoutes.js";
app.use("/api/auth", authRoutes);

export default app;
