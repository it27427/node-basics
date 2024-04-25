const express = require('express');
const router = express.Router();

const { getUpload } = require('../controllers/upload.controller');

router.get('/', getUpload);

module.exports = router;
