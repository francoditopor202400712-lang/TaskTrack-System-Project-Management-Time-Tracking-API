const express = require("express");
const router = express.Router();
const db = require("../data/db");

// GET users
router.get("/", (req, res) => {
  res.json(db.users);
});

// POST user
router.post("/", (req, res) => {
  const { name, role } = req.body;

  if (!name || !role) {
    return res.status(400).json({ message: "Name and role required" });
  }

  const newUser = {
    id: db.users.length + 1,
    name,
    role
  };

  db.users.push(newUser);
  res.status(201).json(newUser);
});
// DELETE user
router.delete("/:id", (req, res) => {
  db.users = db.users.filter(u => u.id != req.params.id);
  res.json({ message: "User deleted" });
});

module.exports = router;