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
// Cập nhật sản phẩm
const updateProduct = async (id, name, description, price, stock, category_id) => {
  const result = await pool.query(
    `
     UPDATE products 
     SET name = $1, description = $2, price = $3, stock = $4, category_id = $5
     WHERE id = $6
     RETURNING *
     `,
    [name, description, price, stock, category_id, id]
  );
  return result.rows[0];
};
// Xoá sản phẩm
const deleteProduct = async (id) => {
  const result = await pool.query(
    `DELETE FROM products WHERE id = $1 RETURNING *`,
    [id]
  );
  return result.rows[0];
}
export default {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct
};
