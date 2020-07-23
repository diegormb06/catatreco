import knex from "knex";
import path from "path";

const connection = knex({
  client: "pg",
  connection: {
    host: "localhost",
    user: "postgres",
    password: "admin",
    database: "catatreco",
  },
});

export default connection;
