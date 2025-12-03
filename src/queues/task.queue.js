// src/queues/task.queue.js
import { Queue } from "bullmq";
import { redisConnection } from "../utils/redis.js";

const TaskQueue = new Queue("task-queue", {
  connection: redisConnection,
});

export default TaskQueue;
