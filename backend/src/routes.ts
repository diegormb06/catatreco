import express from "express";
import collectPointsController from "./controllers/collectPointsController";
import typesController from "./controllers/typesController";
const routes = express.Router();
const collectPoints = new collectPointsController();
const types = new typesController();

routes.get("/", (require, response) => {
  return response.json("Backend is running");
});

routes.get("/types", types.index);

routes.get("/collect-points/:id", collectPoints.show);
routes.get("/collect-points", collectPoints.index);
routes.post("/collect-points", collectPoints.create);

export default routes;
