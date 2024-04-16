const express = require('express');
const router = express.Router();

const { addUsers, viewUsers } = require('../controllers/userControllers');

router.get('/users', addUsers);
router.post('/users', viewUsers);

module.exports = router;
