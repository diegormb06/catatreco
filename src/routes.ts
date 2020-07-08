import express from "express";
const routes = express.Router();

routes.get("/", (require: any, response: any) => {
  return response.json("Backend is running");
});

export default routes;
