const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');

app.use(morgan('dev'));

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const homeRoutes = require('./routes/homeRoutes');
const userRoutes = require('./routes/userRoutes');

app.use('/api/', homeRoutes);
app.use('/api/user', userRoutes);

app.use((req, res) => {
  res.send('<h1>Error 404! Page Not Found!!!</h1>');
  res.end();
});

module.exports = app;
