const express = require('express');
const router = express.Router();
const {
  getAllUsers,
  getSingleUser,
  createUser,
} = require('../controllers/user.controller');

router.get('/users', getAllUsers);
router.get('/users/:id', getSingleUser);
router.post('/users', createUser);

module.exports = router;
