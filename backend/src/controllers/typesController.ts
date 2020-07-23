import db from "../database/connection";
import { Request, Response } from "express";

class TypesController {
  async index(request: Request, response: Response) {
    const types = await db("item_types").select("*");
    response.json(types);
  }
}

export default TypesController;
