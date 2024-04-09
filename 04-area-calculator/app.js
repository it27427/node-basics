const express = require('express');

const app = express();

app.use('/', (req, res) => {
  res.send('<h1>Express Area Calculator App</h1>');
});

module.exports = app;
