const express = require('express');
const app = express();
const dotenv = require('dotenv');

dotenv.config({ path: './config/dotenv.env' });

app.get('/', (req, res) => {
  res.send('<h1>Hello from home route</h1>');
});

module.exports = app;
