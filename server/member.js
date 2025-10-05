import express from "express";
import multer from "multer";
import path from "path";
import { verifyAdmin } from "./authMiddleware.js";

const router = express.Router();

// In-memory dummy data for current members; replace with DB later
let currentMembers = [
  { id: 1, name: "Mr. Kapil Dev", achievements: [], projects: [] }
  // you can add more
];

// setup multer storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const type = req.params.type;  // "achievements" or "projects"
    const dest = path.join('uploads', type);
    cb(null, dest);
  },
  filename: (req, file, cb) => {
    const uniqueName = Date.now() + '-' + file.originalname;
    cb(null, uniqueName);
  }
});

const upload = multer({ storage });

// Upload achievement
router.post('/:id/achievement', verifyAdmin, upload.single('file'), (req, res) => {
  const memberId = parseInt(req.params.id);
  const member = currentMembers.find(m => m.id === memberId);
  if (!member) {
    return res.status(404).json({ error: "Member not found" });
  }
  if (!req.file) {
    return res.status(400).json({ error: "File required" });
  }
  member.achievements.push({
    filename: req.file.filename,
    originalname: req.file.originalname,
    uploadedAt: new Date()
  });
  return res.json({ message: "Achievement uploaded", member });
});

// Move member to alumni
router.post('/move-to-alumni/:id', verifyAdmin, (req, res) => {
  const memberId = parseInt(req.params.id);
  const idx = currentMembers.findIndex(m => m.id === memberId);
  if (idx === -1) {
    return res.status(404).json({ error: "Member not found" });
  }
  const member = currentMembers[idx];
  // do logic to move to alumni (e.g., push into alumni array, remove from currentMembers)
  currentMembers.splice(idx, 1);
  return res.json({ message: "Member moved to alumni", member });
});

export default router;
