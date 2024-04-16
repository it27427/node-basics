const express = require('express');
const router = express.Router();

const { getHomeController } = require('../controllers/home.controllers');

router.get('/', getHomeController);

module.exports = router;
