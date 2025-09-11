import userService from '../services/userService.js';

const getAllUsers = async (req, res) => {
  try {
    const users = await userService.getAllUsers();
    res.json(users);
  } catch (err) {
    console.error("❌ Lỗi khi lấy người dùng:", err.message);
    res.status(500).json({ error: "Server error" });
  }
}
const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await userService.getUserById(id);
    if (!user) {
      return res.status(404).json({ message: "Không tìm thấy người dùng" });
    }
    res.json(user);
  } catch (err) {
    console.error("❌ Lỗi khi lấy người dùng theo ID:", err.message);
    res.status(500).json({ error: "Server error" });
  }
};
// POST /users
const createUser = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    if (!name || !email || !password)
      return res.status(400).json({ message: "Thiếu thông tin bắt buộc" });

    const newUser = await userService.createUser(name, email, password, role);
    res.status(201).json(newUser);
  } catch (err) {
    console.error("❌ Lỗi khi tạo user:", err.message);
    res.status(500).json({ error: "Server error" });
  }
};

// PUT /users/:id
const updateUser = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    const updatedUser = await userService.updateUser(
      req.params.id,
      name,
      email,
      password,
      role
    );

    if (!updatedUser)
      return res.status(404).json({ message: "Không tìm thấy user" });

    res.json(updatedUser);
  } catch (err) {
    console.error("❌ Lỗi khi cập nhật user:", err.message);
    res.status(500).json({ error: "Server error" });
  }
};

// DELETE /users/:id
const deleteUser = async (req, res) => {
  try {
    const deletedUser = await userService.deleteUser(req.params.id);
    if (!deletedUser)
      return res.status(404).json({ message: "Không tìm thấy user" });

    res.json({ message: "Xóa thành công", user: deletedUser });
  } catch (err) {
    console.error("❌ Lỗi khi xóa user:", err.message);
    res.status(500).json({ error: "Server error" });
  }
};

export default {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
