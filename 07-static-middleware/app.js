const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const app = express();

dotenv.config({ path: './config/dotenv.env' });

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());
app.use(morgan('dev'));

// BAD-UEL MIDDLEWARE
app.use((req, res, next) => {
  res.send('<h2>Bad URL Request...</h2>');
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.get('/', (req, res) => {
  res.send('<h1>Hello From HOME</h1>');
});

module.exports = app;
