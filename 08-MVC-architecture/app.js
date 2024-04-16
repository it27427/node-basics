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

const homeRoutes = require('./routes/homeRoutes');

// GET-HOME
app.get('/', homeRoutes);

module.exports = app;
