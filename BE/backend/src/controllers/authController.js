import { login as loginService, register as registerService } from "../services/authService.js";

export async function login(req, res) {
  try {
    const { email, password } = req.body;
    const { token, user } = await loginService(email, password);
    res.json({ token, user });
  } catch (err) {
    res.status(401).json({ message: err.message });
  }
}

export async function register(req, res) {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({ message: "Thiếu thông tin bắt buộc" });
    }
    const { token, user } = await registerService(name, email, password);
    res.status(201).json({ token, user });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}

export function getProfile(req, res) {
  res.json({ message: "Xin chào!", user: req.user });
}
