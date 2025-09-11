import pool from "../config/database.js";

// Lấy tất cả sản phẩm
const getAllProducts = async () => {
  const result = await pool.query(`
    SELECT p.id, p.name, p.description, p.price, p.stock, c.name AS category
    FROM products p
    LEFT JOIN categories c ON p.category_id = c.id
    ORDER BY p.id
  `);
  return result.rows;
};

// Lấy sản phẩm theo ID
const getProductById = async (id) => {
  const result = await pool.query(
    `
    SELECT p.id, p.name, p.description, p.price, p.stock, c.name AS category
    FROM products p
    LEFT JOIN categories c ON p.category_id = c.id
    WHERE p.id = $1
    `,
    [id]
  );
  return result.rows[0];
};

// Thêm sản phẩm mới
const createProduct = async (name, description, price, stock, category_id) => {
  const result = await pool.query(
    `
    INSERT INTO products (name, description, price, stock, category_id)
    VALUES ($1, $2, $3, $4, $5)
    RETURNING *
    `,
    [name, description, price, stock, category_id]
  );
  return result.rows[0];
};

export default {
  getAllProducts,
  getProductById,
  createProduct,
};
