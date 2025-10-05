import express from "express";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config();
const router = express.Router();

router.post('/login', (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ error: "Email and password required" });
  }

  if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
    // create token with role
    const token = jwt.sign(
      { email, role: 'admin' },
      process.env.JWT_SECRET,
      { expiresIn: '2h' }
    );
    // user object to send back
    const user = {
      email: email,
      role: 'admin'
    };

    // respond with both token and user info
    return res.json({ token, user });
  } else {
    return res.status(401).json({ error: "Invalid credentials" });
  }
});

export default router;
