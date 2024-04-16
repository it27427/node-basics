const express = require('express');
const router = express.Router();

const { getAllUsers } = require('../controllers/user.controllers');

router.get('/users', getAllUsers);

module.exports = router;
