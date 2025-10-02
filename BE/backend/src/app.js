import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(cors());
app.use(express.json());

// Serve static files from uploads directory
app.use('/uploads', express.static(path.join(__dirname, '../uploads')));

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
