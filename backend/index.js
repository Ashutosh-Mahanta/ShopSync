const express = require('express');
const app = express();
const port = 5000;

// Import MySQL connection
const db = require('./config');

// Import routes
const routes = require('./routes/routes');
app.use('/', routes);

// Import and mount products route
const productRoutes = require('./routes/products');
app.use('/api/products', productRoutes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});


