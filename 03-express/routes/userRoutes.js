const express = require('express');
const router = express.Router();

const {
  loginControl,
  registerControl,
} = require('../controllers/userControllers');

router.post('/login', loginControl);
router.post('/register', registerControl);

module.exports = router;
