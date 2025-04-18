const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

let todos = [
  { id: 1, task: 'Learn GitHub Actions' },
  { id: 2, task: 'Build REST API' }
];

app.get('/todos', (req, res) => {
  res.json(todos);
});

app.post('/todos', (req, res) => {
  const { task } = req.body;
  if (!task) {
    return res.status(400).json({ error: 'Task is required' });
  }
  const newTodo = { id: todos.length + 1, task };
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

