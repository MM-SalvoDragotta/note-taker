const express = require('express');

// Import modular routers
const html = require('./html');

const app = express();

app.use('/', html);

module.exports = app;