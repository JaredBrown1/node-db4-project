exports.up = function (knex) {
  return knex.schema
    .createTable("recipes", (tbl) => {
      tbl.increments();
      tbl.string("recipeName", 30).notNullable().unique();
    })

    .createTable("ingredients", (tbl) => {
      tbl.increments();
      tbl.string("ingredientName", 30).notNullable();
      tbl.integer("quantity", parseFloat(3)).notNullable();
      tbl.integer("recipeId").references("recipes.Id");
    })

    .createTable("steps", (tbl) => {
      tbl.increments();
      tbl.string("recipeStep", 128);
      tbl.integer("recipeId").references;
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("steps")
    .dropTableIfExists("ingredients")
    .dropTableIfExists("recipes");
};
