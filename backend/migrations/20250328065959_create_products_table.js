/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable("products", function (table) {
      table.increments("id").primary(); // Auto-increment ID
      table.string("name").notNullable(); // Product Name
      table.text("description"); // Description
      table.decimal("price", 10, 2).notNullable(); // Price
      table.integer("stock").unsigned().defaultTo(0); // Stock Quantity
      table.timestamps(true, true); // Created at & Updated at
    });
  };

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTable("products");
  };
