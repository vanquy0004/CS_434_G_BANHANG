import express from "express";
const app = express();

app.use(express.json());

// Import routes
import productRoutes from "./routes/productRoutes.js";

// Sử dụng routes
app.use("/products", productRoutes);

export default app;
