import Knex from "knex";

export async function up(knex: Knex) {
  return knex.schema.createTable("collect_points", (table) => {
    table.increments("id").primary();
    table.string("image").notNullable();
    table.string("nome").notNullable();
    table.string("email").notNullable();
    table.string("fone_number").notNullable();
    table.string("city").notNullable();
    table.string("uf", 2).notNullable();
    table.string("address").notNullable();
    table.decimal("latitude").notNullable();
    table.decimal("longitud").notNullable();
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable("collect_points");
}
