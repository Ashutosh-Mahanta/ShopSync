/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable("orders", function (table) {
      table.increments("id").primary(); // Auto-incrementing ID
      table.integer("user_id").unsigned().notNullable();
      table.decimal("total_price", 10, 2).notNullable();
      table.enum("status", ["pending", "completed", "cancelled"]).defaultTo("pending");
      table.timestamp("created_at").defaultTo(knex.fn.now());
      table.timestamp("updated_at").defaultTo(knex.fn.now());
  
      // Foreign Key Constraint
      table.foreign("user_id").references("id").inTable("users").onDelete("CASCADE");
    });
  };

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTable("orders");
  };
