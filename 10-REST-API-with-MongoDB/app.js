const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const morgan = require('morgan');

// CONFIG-DOTENV
dotenv.config();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

// IMPORT-ROUTES
const homeRouter = require('./routes/home.route');
const userRouter = require('./routes/user.route');

app.use(homeRouter);
app.use('/api', userRouter);

// ERROR-NOT-FOUND - 404
app.use((req, res, next) => {
  res.status(404).sendFile(__dirname + '/views/error.html');
});

// INTERNAL-SERVER-ERROR - 500
app.use((err, req, res, next) => {
  res.statue(500).sendFile(__dirname + '/views/server.html');
});

module.exports = app;
