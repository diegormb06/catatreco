import Knex from "knex";

export async function seed(knex: Knex) {
  await knex("item_types").insert([
    { name: "Lâmpadas", slug: "lampadas" },
    { name: "Pilhas e Baterias", slug: "pilhas-e-baterias" },
    { name: "Papéis e Papelão", slug: "papeis-e-papelao" },
    { name: "Resíduos Eletrônicos", slug: "residuos-eletronicos" },
    { name: "Resíduos Orgânicos", slug: "residuos-organicos" },
    { name: "Óleo de Cozinha", slug: "oleo-de-cozinha" },
  ]);
}
