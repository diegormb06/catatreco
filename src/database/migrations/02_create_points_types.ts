import Knex from "knex";

export async function up(knex: Knex) {
  return knex.schema.createTable("points_types", (table) => {
    table.increments("id").primary();
    table
      .integer("point_id")
      .notNullable()
      .references("id")
      .inTable("collect_points");
    table
      .integer("type_id")
      .notNullable()
      .references("id")
      .inTable("item_types");
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable("points_types");
}
