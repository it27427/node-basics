const express = require('express');
const router = express.Router();
const {
  getControl,
  postControl,
  putControl,
  deleteControl,
} = require('../controllers/homeControllers');

router.get('/', getControl);
router.post('/', postControl);
router.put('/', putControl);
router.delete('/', deleteControl);

module.exports = router;
