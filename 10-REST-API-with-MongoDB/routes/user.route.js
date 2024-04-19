const express = require('express');
const router = express.Router();
const {
  getAllUsers,
  getSingleUser,
} = require('../controllers/user.controller');

router.get('/users', getAllUsers);
router.get('/users/:id', getSingleUser);

module.exports = router;
