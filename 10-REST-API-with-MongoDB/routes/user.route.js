const express = require('express');
const router = express.Router();
const {
  getAllUsers,
  getSingleUser,
  createUser,
  updateUser,
} = require('../controllers/user.controller');

router.get('/users', getAllUsers);
router.get('/users/:id', getSingleUser);
router.post('/users', createUser);
router.patch('/users/:id', updateUser);

module.exports = router;
