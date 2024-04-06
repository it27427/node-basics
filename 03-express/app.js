const express = require('express');
const morgan = require('morgan');
const app = express();

app.use(morgan('dev'));

const homeRoutes = require('./routes/homeRoutes');
const userRoutes = require('./routes/userRoutes');

app.use('/api/', homeRoutes);
app.use('/api/user', userRoutes);

app.use((req, res) => {
  res.send('<h1>Error 404! Page Not Found!!!</h1>');
  res.end();
});

module.exports = app;
