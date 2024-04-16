const express = require('express');
const router = express.Router();

const { getUserController } = require('../controllers/user.controllers');

router.get('/users', getUserController);

module.exports = router;
