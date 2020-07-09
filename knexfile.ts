import path from "path";

module.exports = {
  client: "pg",
  connection: {
    host: "localhost",
    user: "postgres",
    password: "admin",
    database: "waste_collect",
  },
  migrations: {
    directory: path.resolve(__dirname, "src", "database", "migrations"),
  },
};
