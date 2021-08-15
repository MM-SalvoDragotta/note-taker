// Dependencies
const express = require('express');
const path = require('path');

// Point Server to the route files
const api = require('./routes/index.js');

// const htmlRouter = require('./routes/htmlRouter')
// const notesRouter = require('./routes/notesRouter');

const PORT = process.env.port || 3001;
// Create an express server
const app = express();

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use('/', api);
app.use('/api', api)

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);