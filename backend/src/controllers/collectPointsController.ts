import db from "../database/connection";
import { Request, Response } from "express";

class CollectPointsController {
  async create(require: Request, response: Response) {
    db.transaction(async (trx) => {
      try {
        const point = {
          image: require.body.image,
          nome: require.body.nome,
          email: require.body.email,
          phone: require.body.phone,
          city: require.body.city,
          uf: require.body.uf,
          address: require.body.address,
          latitude: require.body.latitude,
          longitud: require.body.longitud,
        };
        const ids = await trx("collect_points").insert(point).returning("id");

        const pointTypes = require.body.types.map((type_id: number) => {
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
