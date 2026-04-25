const express = require("express");
const router = express.Router();
const db = require("../data/db");

const validStatus = ["To Do", "In Progress", "Completed"];

// GET tasks
router.get("/", (req, res) => {
  res.json(db.tasks);
});

// POST task
router.post("/", (req, res) => {
  const { projectId, title, assignedTo } = req.body;

  const project = db.projects.find(p => p.id == projectId);
  const user = db.users.find(u => u.id == assignedTo);

  if (!project) return res.status(404).json({ message: "Project not found" });
  if (!user) return res.status(404).json({ message: "User not found" });

  const newTask = {
    id: db.tasks.length + 1,
    projectId,
    title,
    assignedTo,
    status: "To Do"
  };

  db.tasks.push(newTask);
  res.status(201).json(newTask);
});

// PUT task
router.put("/:id", (req, res) => {
  const task = db.tasks.find(t => t.id == req.params.id);

  if (!task) return res.status(404).json({ message: "Task not found" });

  if (req.body.status && !validStatus.includes(req.body.status)) {
    return res.status(400).json({ message: "Invalid status" });
  }

  task.title = req.body.title || task.title;
  task.status = req.body.status || task.status;

  res.json(task);
});

// DELETE task
router.delete("/:id", (req, res) => {
  db.tasks = db.tasks.filter(t => t.id != req.params.id);
  res.json({ message: "Task deleted" });
});

module.exports = router;