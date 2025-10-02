import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import pool from '../config/database.js';

const SECRET_KEY = "mysecretkey";

export const login = async (email, password) => {
  const result = await pool.query(
    'SELECT id, name, email, password, role FROM users WHERE email = $1',
    [email]
  );
  const user = result.rows[0];
  if (!user) throw new Error("Email không tồn tại");

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) throw new Error("Sai mật khẩu");

  const token = jwt.sign({ id: user.id, email: user.email }, SECRET_KEY, {
    expiresIn: "1h",
  });
  return { token, user: { id: user.id, name: user.name, email: user.email, role: user.role } };
};

export const register = async (name, email, password) => {
  // Check if email already exists
  const existingUser = await pool.query('SELECT id FROM users WHERE email = $1', [email]);
  if (existingUser.rows.length > 0) throw new Error("Email đã tồn tại");

  const hashedPassword = await bcrypt.hash(password, 10);
  const result = await pool.query(
    'INSERT INTO users (name, email, password, role) VALUES ($1, $2, $3, $4) RETURNING id, name, email, role',
    [name, email, hashedPassword, 'customer']
  );
  const newUser = result.rows[0];

  const token = jwt.sign({ id: newUser.id, email: newUser.email }, SECRET_KEY, {
    expiresIn: "1h",
  });
  return { token, user: newUser };
};
