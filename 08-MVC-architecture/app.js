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

const homeRouter = require('./routes/homeRoutes');
const userRouter = require('./routes/userRoutes');

app.use(homeRouter);
app.use(userRouter);

// NOT-FOUND
app.use((req, res, next) => {
  res.status(404).json({
    message: 'Resource Not Found!',
  });
});

module.exports = app;
