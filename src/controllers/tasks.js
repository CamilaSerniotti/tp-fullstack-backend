import {
  listUserTasks,
  createUserTask,
  editTask,
  removeTask
} from '../services/taskService.js';

export async function getTasks(req, res) {
  const tasks = await listUserTasks(req.userId);
  res.json(tasks);
}

export async function addTask(req, res) {
  try {
    const task = await createUserTask(req.userId, req.body.title);
    res.status(201).json(task);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

export async function updateTask(req, res) {
  try {
    const task = await editTask(req.userId, req.params.id, req.body.title);
    res.json(task);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

export async function deleteTask(req, res) {
  await removeTask(req.userId, req.params.id);
  res.sendStatus(200);
}
