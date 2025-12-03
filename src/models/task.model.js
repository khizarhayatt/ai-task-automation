// src/models/task.model.js
import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  type: String,
  input: String,
  output: String,
  status: { type: String, enum: ["pending", "completed"], default: "pending" },
});

export default mongoose.model("Task", taskSchema);
