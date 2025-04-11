const express = require("express");
const router = express.Router();
const knex = require("../db/knex");

// Get all products
router.get("/", async (req, res) => {
  try {
    const products = await knex("products").select("*");
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: "Error fetching products", error });
  }
});

// Get a single product by ID
router.get("/:id", async (req, res) => {
  try {
    const product = await knex("products").where({ id: req.params.id }).first();
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: "Error fetching product", error });
  }
});

// Add a new product
router.post("/", async (req, res) => {
  try {
    const { name, description, price, stock } = req.body;
    const [id] = await knex("products").insert({ name, description, price, stock });
    res.status(201).json({ message: "Product added", id });
  } catch (error) {
    res.status(500).json({ message: "Error adding product", error });
  }
});

// Update an existing product
router.put("/:id", async (req, res) => {
  try {
    const { name, description, price, stock } = req.body;
    const updated = await knex("products").where({ id: req.params.id }).update({ name, description, price, stock });
    if (!updated) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.json({ message: "Product updated" });
  } catch (error) {
    res.status(500).json({ message: "Error updating product", error });
  }
});

// Delete a product
router.delete("/:id", async (req, res) => {
  try {
    const deleted = await knex("products").where({ id: req.params.id }).del();
    if (!deleted) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.json({ message: "Product deleted" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting product", error });
  }
});

module.exports = router;
