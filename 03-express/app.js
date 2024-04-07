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

app.use('/', homeRoutes);
app.use('/api/user', userRoutes);

app.get('/register', (req, res) => {
  res.sendFile(__dirname + '/views/' + 'register.html');
});

app.post('/login', (req, res) => {
  res.sendFile(__dirname + '/views/' + 'login.html');
});

app.use((req, res) => {
  res.send('<h1>Error 404! Page Not Found!!!</h1>');
  res.end();
});

module.exports = app;
