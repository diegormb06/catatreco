import db from "../database/connection";
import { Request, Response } from "express";

class CollectPointsController {
  async index(request: Request, response: Response) {
    const { city, uf, items } = request.query;
    const parsedTypes = String(items)
      .split(",")
      .map((item) => Number(item.trim()));

    const points = await db("collect_points")
      .join("points_types", "collect_points.id", "=", "points_types.point_id")
      .whereIn("points_types.type_id", parsedTypes)
      .where("city", String(city))
      .where("uf", String(uf))
      .select("collect_points.*");

    return response.json(points);
  }

  async show(request: Request, response: Response) {
    const { id } = request.params;
    const point = await db("collect_points").select().where("id", id).first();

    if (!point)
      response.status(400).json({ message: "Ponto de coleta não encontrado" });

    const types = await db("item_types")
      .join("points_types", "item_types.id", "=", "points_types.type_id")
      .where("points_types.point_id", id)
      .select("item_types.name");

    response.json({ point, types });
  }

  async create(request: Request, response: Response) {
    db.transaction(async (trx) => {
      try {
        const point = {
          image: "encurtador.com.br/hvHKX",
          nome: request.body.nome,
          email: request.body.email,
          phone: request.body.phone,
          city: request.body.city,
          uf: request.body.uf,
          address: request.body.address,
          latitude: request.body.latitude,
          longitud: request.body.longitud,
        };
        const ids = await trx("collect_points").insert(point).returning("id");

        const pointTypes = request.body.types.map((type_id: number) => {
          return {
            point_id: ids[0],
            type_id,
          };
        });
        await trx("points_types").insert(pointTypes);

        return response.json({ id: ids[0], ...point });
      } catch (error) {
        response.send(error.message);
      }
    });
  }
}

export default CollectPointsController;
