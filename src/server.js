// src/server.js
import express from "express";
import dotenv from "dotenv";
import taskRoutes from "./routes/task.routes.js";

dotenv.config();
const app = express();
app.use(express.json());

// Routes
app.use("/api/tasks", taskRoutes);

app.listen(5000, () => console.log("Server running on port 5000"));
