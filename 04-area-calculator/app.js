const express = require('express');
const app = express();
const morgan = require('morgan');

app.use(morgan('dev'));

app.use('/', (req, res) => {
  res.send('<h1>Express Area Calculator App</h1>');
});

module.exports = app;
