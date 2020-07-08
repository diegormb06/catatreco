import express from "express";
const routes = express.Router();

app.get("/", (require: any, response: any) => {
  return response.json("Backend is running");
});
