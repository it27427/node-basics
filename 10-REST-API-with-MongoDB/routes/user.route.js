const express = require('express');
const router = express.Router();
const {
  getAllUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
} = require('../controllers/user.controller');

router.get('/users', getAllUsers);
router.get('/users/:id', getSingleUser);
router.post('/users', createUser);
router.patch('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);

module.exports = router;
