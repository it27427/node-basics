const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const morgan = require('morgan');

dotenv.config();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('dev'));

// ERROR-NOT-FOUND
app.use((req, res, next) => {
  res.status(404).json({
    message: 'Error 404! Page Not Found!!',
  });
});

// INTERNAL-SERVER-ERROR
app.use((err, req, res, next) => {
  res.status(500).json({
    message: 'Something Broken!',
  });
});

module.exports = app;
