import pool from '../config/database.js';

// Lấy tất cả người dùng
const getAllUsers = async () => {
    const result = await pool.query(`SELECT id, name , email, password, email, role, created_at FROM users ORDER BY id ASC`); 
    return result.rows;
};
// Lấy người dùng theo ID
const getUserById = async (id)=> {
 const result = await pool.query(
    `SELECT  u.id, u.name , u.email, u.password, u.email, u.role, u.created_at
    FROM users u
    WHERE u.id = $1`,
     [id]);
    return result.rows[0];
};

// Thêm người dùng mới
const createUser = async (name, email, password, role = "customer") => {
  const result = await pool.query(
    `
    INSERT INTO users (name, email, password, role)
    VALUES ($1, $2, $3, $4)
    RETURNING id, name, email, role, created_at
    `,
    [name, email, password, role]
  );
  return result.rows[0];
};

// Cập nhật người dùng
const updateUser = async (id, name, email, password, role) => {
  const result = await pool.query(
    `
    UPDATE users 
    SET name = $1, email = $2, password = $3, role = $4
    WHERE id = $5
    RETURNING id, name, email, role, created_at
    `,
    [name, email, password, role, id]
  );
  return result.rows[0];
};

// Xoá người dùng
const deleteUser = async (id) => {
  const result = await pool.query(
    `DELETE FROM users WHERE id = $1 RETURNING id, name, email, role`,
    [id]
  );
  return result.rows[0];
};

export default {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
};
