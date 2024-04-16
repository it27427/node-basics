const express = require('express');
const app = express();
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const morgan = require('morgan');

// CONFIGURED-DOTENV
dotenv.config({ path: './config/dotenv.env' });

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());
app.use(morgan('dev'));

const homeRoutes = require('./routes/homeRoutes');
const userRoutes = require('./routes/userRoutes');

app.use('/', homeRoutes);
app.use('/', userRoutes);

// NOT-FOUND
app.use((req, res, next) => {
  res.status(404).json({
    message: 'Resource Not Found!',
  });
});

module.exports = app;
