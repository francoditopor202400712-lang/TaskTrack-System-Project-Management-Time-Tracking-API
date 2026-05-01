let users = [
  { id: 1, name: "Alice Johnson", role: "Project Manager" },
  { id: 2, name: "Bob Smith", role: "Frontend Developer" },
  { id: 3, name: "Charlie Brown", role: "Backend Developer" },
  { id: 4, name: "Diana Prince", role: "UI/UX Designer" }
];

let projects = [
  { id: 1, name: "Website Redesign", description: "Revamp company website UI" },
  { id: 2, name: "Mobile App", description: "Build fitness tracking app" }
];

let tasks = [
  {
    id: 1,
    projectId: 1,
    title: "Design Homepage",
    assignedTo: 4,
    status: "Completed"
  },
  {
    id: 2,
    projectId: 1,
    title: "Develop Landing Page",
    assignedTo: 2,
    status: "In Progress"
  },
  {
    id: 3,
    projectId: 2,
    title: "Setup API",
    assignedTo: 3,
    status: "To Do"
  },
  {
    id: 4,
    projectId: 2,
    title: "Create Login Screen",
    assignedTo: 2,
    status: "To Do"
  }
];

let timelogs = [
  {
    id: 1,
    taskId: 1,
    userId: 4,
    startTime: new Date("2026-04-30T08:00:00"),
    endTime: new Date("2026-04-30T10:30:00"),
    hoursWorked: 2.5
  },
  {
    id: 2,
    taskId: 2,
    userId: 2,
    startTime: new Date("2026-04-30T09:00:00"),
    endTime: new Date("2026-04-30T12:00:00"),
    hoursWorked: 3
  },
  {
    id: 3,
    taskId: 3,
    userId: 3,
    startTime: new Date("2026-04-30T13:00:00"),
    endTime: new Date("2026-04-30T15:00:00"),
    hoursWorked: 2
  }
];

module.exports = {
  users,
  projects,
  tasks,
  timelogs
};