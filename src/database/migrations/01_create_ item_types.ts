import Knex from "knex";

export async function up(knex: Knex) {
  return knex.schema.createTable("item_types", (table) => {
    table.increments("id").primary();
    table.string("name").notNullable();
    table.string("slug").notNullable();
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable("item_types");
}
