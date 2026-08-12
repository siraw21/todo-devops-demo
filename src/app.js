const express = require("express");

const app = express();

app.use(express.json());

const todos = [
  {
    id: 1,
    title: "Learn DevOps",
    completed: false,
  },
];

app.get("/", (req, res) => {
  res.json({
    message: process.env.APP_NAME || "Todo API v2",
    version: "2.0",
  });
});

app.get("/todos", (req, res) => {
  res.json(todos);
});

app.post("/todos", (req, res) => {
  const todo = {
    id: todos.length + 1,
    title: req.body.title,
    completed: false,
  };

  todos.push(todo);

  res.status(201).json(todo);
});

app.get("/health", (req, res) => {
  res.json({
    status: "OK",
  });
});

module.exports = app;
