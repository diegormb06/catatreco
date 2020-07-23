import express from "express";
import db from "./database/connection";
import collectPointsController from "./controllers/collectPointsController";
const routes = express.Router();
const collectPoints = new collectPointsController();

routes.get("/", (require, response) => {
  return response.json("Backend is running");
});

routes.get("/types", async (require, response) => {
  const types = await db("item_types").select("*");
  response.json(types);
});

routes.post("/collect-points", collectPoints.create);

export default routes;
