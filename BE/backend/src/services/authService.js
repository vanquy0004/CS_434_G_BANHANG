const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const SECRET_KEY = "mysecretkey";

// Giả lập user DB
const users = [
  { id: 1, email: "user@gmail.com", password: bcrypt.hashSync("123456", 10) }
];

exports.login = async (email, password) => {
  const user = users.find(u => u.email === email);
  if (!user) throw new Error("Email không tồn tại");

  const isPasswordValid = bcrypt.compareSync(password, user.password);
  if (!isPasswordValid) throw new Error("Sai mật khẩu");

  const token = jwt.sign({ id: user.id, email: user.email }, SECRET_KEY, {
    expiresIn: "1h",
  });
  return token;
};
