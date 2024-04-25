const express = require('express');
const router = express.Router();
const path = require('path');
const multer = require('multer');

const { getUpload, uploadImage } = require('../controllers/upload.controller');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname + '/public/images/uploads/'));
  },

  filename: function (req, file, cb) {
    const name = Date.now() + '-' + file.originalname;
    cb(null, name);
  },
});

const upload = multer({ storage: storage });

router.get('/', getUpload);
router.post('/', upload.single('image'), uploadImage);

module.exports = router;
