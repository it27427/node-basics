const express = require('express');
const router = express.Router();

const { addUser } = require('../controllers/userControllers');

router.get('/users', addUser);

module.exports = router;
