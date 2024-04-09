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

app.post('/triangle', (req, res) => {
  const { base, height } = req.body;
  const area = 0.5 * base * height;

  res.send(`<h2>Area of triangle is: ${area}</h2>`);
});

app.post('/circle', (req, res) => {
  const { radius } = req.body;
  const area = Math.PI * radius * radius;

  res.send(`<h2>Area of circle is: ${area}</h2>`);
});

module.exports = app;
