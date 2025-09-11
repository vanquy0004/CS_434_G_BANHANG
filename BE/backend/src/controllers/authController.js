import { login as loginService } from "../services/authService.js";

export async function login(req, res) {
  try {
    const { email, password } = req.body;
    const token = await loginService(email, password);
    res.json({ token });
  } catch (err) {
    res.status(401).json({ message: err.message });
  }
}

export function getProfile(req, res) {
  res.json({ message: "Xin chào!", user: req.user });
}
