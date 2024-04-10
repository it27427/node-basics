const express = require('express');
const app = express();

const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const morgan = require('morgan');

// CONFIGURE-DOTENV
dotenv.config({ path: './config/dotenv.env' });

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.send('<h1>Hello from home route</h1>');
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

module.exports = app;
