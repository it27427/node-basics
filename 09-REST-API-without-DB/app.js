const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const morgan = require('morgan');

// DOT-ENV CONFIG
dotenv.config({ path: './config/.env' });

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

const homeRouter = require('./routes/home.routes');
const userRouter = require('./routes/user.routes');

app.use(homeRouter);
app.use('/users', userRouter);

app.use((req, res, next) => {
  res.status(404).sendFile(__dirname + '/views/error.html');
});

app.use((err, req, res, next) => {
  res.status(500).sendFile(__dirname + '/views/server.html');
});

module.exports = app;
