const express = require('express');
const router = express.Router();

const {
  getAllUsers,
  createUser,
  updateUser,
  deleteUser,
} = require('../controllers/user.controllers');

router.get('/', getAllUsers);
router.post('/', createUser);
router.put('/:id', updateUser);
router.put('/:id', deleteUser);

module.exports = router;
