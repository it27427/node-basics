const express = require('express');
const router = express.Router();

const { getHomeController } = require('../controllers/home.controller');

app.get('/', getHomeController);

module.exports = router;
