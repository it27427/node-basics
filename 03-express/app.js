const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('<h1>Hello From Express</h1>');
});

module.exports = app;
