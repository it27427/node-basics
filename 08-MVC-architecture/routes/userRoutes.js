const express = require('express');
const router = express.Router();

const { getUsers, addUsers } = require('../controllers/userControllers');

router.get('/users', getUsers);
router.post('/users', addUsers);

module.exports = router;
