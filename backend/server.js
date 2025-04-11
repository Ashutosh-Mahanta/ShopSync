const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mysql = require("mysql2");
const dotenv = require("dotenv");

// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Database Connection
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT
});

db.connect((err) => {
  if (err) {
    console.error("❌ Database connection failed: " + err.message);
    return;
  }
  console.log("✅ Connected to MySQL Database!");
});

// Import Routes
const authRoutes = require("./routes/authRoutes");
const productsRoutes = require("./routes/products");

// Use Routes
app.use("/api/auth", authRoutes);
app.use("/api/products", productsRoutes);

// Test route to check if the server is working
app.get("/", (req, res) => {
  res.send("🚀 Server is running! Home route is working.");
});

// Start the Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
