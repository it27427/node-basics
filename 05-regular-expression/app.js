const express = require('express');
const app = express();
const dotenv = require('dotenv');
const bodyParser = require('body-parser');

dotenv.config({ path: './config/dotenv.env' });
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('<h1>Hello from home route</h1>');
});

app.get('/products/:id([0-9]{3})', (req, res) => {
  // ROUTER-PARAMETER
  res.send(`<h1>Product id : ${req.params.id}</h1>`);
});

app.get('/products/:title([a-zA-Z0-9]+)', (req, res) => {
  res.send(`<h1>Product title : ${req.params.title}</h1>`);
});

app.use('*', (req, res) => {
  res.status(404).send({
    message: 'Not a valid route',
  });
});

module.exports = app;
