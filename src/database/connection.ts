import knex from "knex";
import path from "path";

const connection = knex({
  client: "pg",
  connection: {
    host: "localhost",
    user: "postgre",
    password: "admin",
    database: "waste_collect",
  },
});
