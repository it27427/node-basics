const express = require('express');
const router = express.Router();

const { getUsers, createUsers } = require('../controllers/userControllers');

router.get('/users', getUsers);
router.post('/users', createUsers);

module.exports = router;
