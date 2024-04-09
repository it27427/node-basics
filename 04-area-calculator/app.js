const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/' + 'index.html');
});

app.get('/triangle', (req, res) => {
  res.sendFile(__dirname + '/views/' + 'triangle.html');
});

app.get('/circle', (req, res) => {
  res.sendFile(__dirname + '/views/' + 'circle.html');
});

module.exports = app;
