import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import authRoutes from "./auth.js";
import memberRoutes from "./member.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// serve uploads statically
app.use('/uploads/achievements', express.static(path.join(process.cwd(), 'uploads/achievements')));
app.use('/uploads/projects', express.static(path.join(process.cwd(), 'uploads/projects')));

app.use('/api/auth', authRoutes);
app.use('/api/member', memberRoutes);

app.get('/', (req, res) => {
  res.send("Backend server is running 🚀");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
console.log("ENV:", process.env.ADMIN_EMAIL, process.env.ADMIN_PASSWORD, process.env.JWT_SECRET);
