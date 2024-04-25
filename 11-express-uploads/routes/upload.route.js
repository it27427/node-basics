const express = require('express');
const router = express.Router();

const {
  getUpload,
  uploadImage,
  upload,
} = require('../controllers/upload.controller');

router.get('/', getUpload);
router.post('/', upload.single('image'), uploadImage);

module.exports = router;
