const express = require("express");
const router = express.Router();
const db = require("../data/db");

// Hours per user
router.get("/user", (req, res) => {
  const result = {};

  db.timelogs.forEach(log => {
    if (!result[log.userId]) result[log.userId] = 0;
    result[log.userId] += log.hoursWorked;
  });

  res.json(result);
});

// Hours per project
router.get("/project", (req, res) => {
  const result = {};

  db.timelogs.forEach(log => {
    const task = db.tasks.find(t => t.id == log.taskId);
    if (!task) return;

    if (!result[task.projectId]) result[task.projectId] = 0;
    result[task.projectId] += log.hoursWorked;
  });

  res.json(result);
});

module.exports = router;