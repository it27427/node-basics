const express = require('express');
const morgan = require('morgan');
const app = express();

app.use(morgan('dev'));

const homeRoutes = require('./routes/homeRoutes');

app.use('/api/', homeRoutes);

module.exports = app;
