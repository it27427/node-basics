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

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/' + 'index.html');
});

module.exports = app;
