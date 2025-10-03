import orderService from "../services/orderService.js";
import pool from "../config/database.js";

// Create a new order
const createOrder = async (req, res) => {
  try {
    const userId = req.user.id; // assuming user info is in req.user from auth middleware
    const items = req.body.items; // expecting array of { product_id, quantity, price }
    const address = req.body.address;

    if (!items || !Array.isArray(items) || items.length === 0) {
      return res.status(400).json({ message: "Items are required" });
    }
    if (!address || address.trim() === '') {
      return res.status(400).json({ message: "Address is required" });
    }

    const order = await orderService.createOrder(userId, items, address);
    res.status(201).json(order);
  } catch (err) {
    console.error("❌ Lỗi khi tạo đơn hàng:", err.message);
    res.status(500).json({ error: "Server error" });
  }
};

// Get order by ID
const getOrderById = async (req, res) => {
  try {
    const { id } = req.params;
    const order = await orderService.getOrderById(id);
    if (!order) {
      return res.status(404).json({ message: "Không tìm thấy đơn hàng" });
    }
    res.json(order);
  } catch (err) {
    console.error("❌ Lỗi khi lấy đơn hàng:", err.message);
    res.status(500).json({ error: "Server error" });
  }
};

// Process payment for an order
const processPayment = async (req, res) => {
  try {
    const { orderId } = req.body;
    // In a real app, integrate with payment gateway here
    // For now, just update order status to 'paid'
    const client = await pool.connect();
    await client.query('BEGIN');
    await client.query(`UPDATE orders SET status = 'paid' WHERE id = $1`, [orderId]);
    await client.query('COMMIT');
    client.release();

    res.json({ message: "Payment processed successfully" });
  } catch (err) {
    console.error("❌ Lỗi khi xử lý thanh toán:", err.message);
    res.status(500).json({ error: "Server error" });
  }
};

export default {
  createOrder,
  getOrderById,
  processPayment,
};
