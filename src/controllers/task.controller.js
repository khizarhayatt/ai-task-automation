// src/controllers/task.controller.js
import TaskQueue from "../queues/task.queue.js";
import Task from "../models/task.model.js";

export const createTask = async (req, res) => {
  const { type, input } = req.body;

  const newTask = await Task.create({ type, input, status: "pending" });

  await TaskQueue.add("process-task", { taskId: newTask._id });

  res.json({ message: "Task queued successfully", id: newTask._id });
};

export const getTask = async (req, res) => {
  const task = await Task.findById(req.params.id);
  res.json(task);
};
