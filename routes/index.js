const express = require('express');

// Import modular routers
const htmlRouter = require('./htmlRouter');
const notesRouter = require('./notesRouter');

const app = express();

app.use('/', htmlRouter);
app.use('/notes', notesRouter);

module.exports = app;