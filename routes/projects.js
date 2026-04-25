const express = require("express");
const router = express.Router();
const db = require("../data/db");

// GET projects
router.get("/", (req, res) => {
  res.json(db.projects);
});

// POST project
router.post("/", (req, res) => {
  const { name, description } = req.body;

  if (!name) {
    return res.status(400).json({ message: "Project name required" });
  }

  const newProject = {
    id: db.projects.length + 1,
    name,
    description
  };

  db.projects.push(newProject);
  res.status(201).json(newProject);
});

// PUT project
router.put("/:id", (req, res) => {
  const project = db.projects.find(p => p.id == req.params.id);

  if (!project) {
    return res.status(404).json({ message: "Project not found" });
  }

  project.name = req.body.name || project.name;
  project.description = req.body.description || project.description;

  res.json(project);
});

// DELETE project
router.delete("/:id", (req, res) => {
  db.projects = db.projects.filter(p => p.id != req.params.id);
  res.json({ message: "Project deleted" });
});

module.exports = router;