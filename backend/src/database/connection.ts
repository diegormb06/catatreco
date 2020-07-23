import knex from "knex";

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
