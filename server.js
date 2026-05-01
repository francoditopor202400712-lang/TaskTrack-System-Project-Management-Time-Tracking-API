const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());

// Import routes
const userRoutes = require("./routes/users");
const projectRoutes = require("./routes/projects");
const taskRoutes = require("./routes/tasks");
const timeLogRoutes = require("./routes/timelogs");
const reportRoutes = require("./routes/reports");

// Use routes
app.use("/users", userRoutes);
app.use("/projects", projectRoutes);
app.use("/tasks", taskRoutes);
app.use("/timelogs", timeLogRoutes);
app.use("/reports", reportRoutes);

// Root test
app.get("/", (req, res) => {
  res.send("TaskTrack API is running...");
});

// Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});