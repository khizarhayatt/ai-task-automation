// src/ai/agent.js
import OpenAI from "openai";

const client = new OpenAI({ apiKey: process.env.OPENAI_KEY });

export const runAgent = async (type, input) => {
  let prompt = "";

  if (type === "summary") {
    prompt = `Summarize the following:\n${input}`;
  }

  if (type === "email") {
    prompt = `Write a professional email based on this:\n${input}`;
  }

  const response = await client.chat.completions.create({
    model: "gpt-4.1-mini",
    messages: [{ role: "user", content: prompt }],
  });

  return response.choices[0].message.content;
};
