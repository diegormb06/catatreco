import Knex from "knex";

export async function up(knex: Knex) {
  return knex.schema.table("collect_points", (table) => {
    table.renameColumn("fone_number", "phone");
  });
}

export async function down(knex: Knex) {
  return knex.schema.table("collect_points", (table) => {
    table.renameColumn("phone", "fone_number");
  });
}
