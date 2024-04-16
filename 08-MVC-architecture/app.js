const express = require('express');
const app = express();
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const morgan = require('morgan');

// CONFIGURED-DOTENV
dotenv.config({ path: './config/dotenv.dotenv' });

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());
app.use(morgan('dev'));

// GET-HOME
app.get('/', (req, res) => {
  res.send('<h1>Hello from Home Route</h1>');
});

module.exports = app;
