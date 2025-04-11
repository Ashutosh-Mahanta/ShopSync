/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */

exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("products").del();

  // Inserts seed entries
  await knex("products").insert([
    { name: "Laptop", description: "High-performance laptop", price: 60000, stock: 10 },
    { name: "Smartphone", description: "Latest model smartphone", price: 25000, stock: 20 },
    { name: "Headphones", description: "Noise-canceling headphones", price: 5000, stock: 30 },
    { name: "Keyboard", description: "Mechanical keyboard", price: 3000, stock: 15 },
    { name: "Mouse", description: "Wireless mouse", price: 1500, stock: 25 }
  ]);
};
