// src/workers/task.worker.js
import { Worker } from "bullmq";
import { redisConnection } from "../utils/redis.js";
import Task from "../models/task.model.js";
import { runAgent } from "../ai/agent.js";

const worker = new Worker(
  "task-queue",
  async (job) => {
    const taskId = job.data.taskId;
    const task = await Task.findById(taskId);

    const result = await runAgent(task.type, task.input);

    task.status = "completed";
    task.output = result;
    await task.save();
  },
  { connection: redisConnection }
);
