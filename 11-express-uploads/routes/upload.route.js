const express = require('express');
const router = express.Router();

const { getUpload, uploadImage } = require('../controllers/upload.controller');

router.get('/', getUpload);
router.post('/', uploadImage);

module.exports = router;
