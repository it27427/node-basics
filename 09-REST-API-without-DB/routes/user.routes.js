const express = require('express');
const router = express.Router();

const {
  getAllUsers,
  createUser,
  updateUser,
} = require('../controllers/user.controllers');

router.get('/', getAllUsers);
router.post('/', createUser);
router.put('/:id', updateUser);

module.exports = router;
