// Dependencies
const express = require('express');
const path = require('path');
const api = require('./routes/index.js');

// Point Server to the route files
const PORT = process.env.port || 3001;
// Create an express server
const app = express();

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', api)

app.use(express.static('public'));

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);