import pool from "../config/database.js";

// Create a new order with items
const createOrder = async (userId, items, address) => {
  const client = await pool.connect();
  try {
    await client.query('BEGIN');

    // Calculate total amount
    const totalAmount = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

    // Insert order
    const orderResult = await client.query(
      `INSERT INTO orders (user_id, total_amount, status, address) VALUES ($1, $2, 'pending', $3) RETURNING *`,
      [userId, totalAmount, address]
    );
    const order = orderResult.rows[0];

    // Insert order items
    for (const item of items) {
      await client.query(
        `INSERT INTO order_items (order_id, product_id, quantity, price) VALUES ($1, $2, $3, $4)`,
        [order.id, item.product_id, item.quantity, item.price]
      );
    }

    await client.query('COMMIT');
    return order;
  } catch (error) {
    await client.query('ROLLBACK');
    throw error;
  } finally {
    client.release();
  }
};

// Get order by ID with items
const getOrderById = async (orderId) => {
  const orderResult = await pool.query(
    `SELECT * FROM orders WHERE id = $1`,
    [orderId]
  );
  const order = orderResult.rows[0];
  if (!order) return null;

  const itemsResult = await pool.query(
    `SELECT oi.*, p.name, p.img FROM order_items oi JOIN products p ON oi.product_id = p.id WHERE oi.order_id = $1`,
    [orderId]
  );
  order.items = itemsResult.rows;
  return order;
};

export default {
  createOrder,
  getOrderById,
};
