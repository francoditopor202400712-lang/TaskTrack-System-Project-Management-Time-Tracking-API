const express = require("express");
const router = express.Router();
const db = require("../data/db");

// GET logs
router.get("/", (req, res) => {
  res.json(db.timelogs);
});

// START timer
router.post("/start", (req, res) => {
  const { taskId, userId } = req.body;

  const active = db.timelogs.find(
    log => log.userId == userId && !log.endTime
  );

  if (active) {
    return res.status(400).json({ message: "Timer already running" });
  }

  const newLog = {
    id: db.timelogs.length + 1,
    taskId,
    userId,
    startTime: new Date(),
    endTime: null,
    hoursWorked: 0
  };

  db.timelogs.push(newLog);
  res.status(201).json(newLog);
});

// STOP timer
router.post("/stop", (req, res) => {
  const { userId } = req.body;

  const log = db.timelogs.find(
    l => l.userId == userId && !l.endTime
  );

  if (!log) {
    return res.status(404).json({ message: "No active timer" });
  }

  log.endTime = new Date();

  const hours =
    (new Date(log.endTime) - new Date(log.startTime)) / (1000 * 60 * 60);

  log.hoursWorked = parseFloat(hours.toFixed(2));

  res.json(log);
});

module.exports = router;