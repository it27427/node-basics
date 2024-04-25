const path = require('path');
const multer = require('multer');

const getUpload = (req, res) => {
  res.sendFile(path.join(__dirname + '/../views/uploads.html'));
};

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

const uploadImage = (req, res) => {
  res.send('Image Uploaded');
};

module.exports = {
  getUpload,
  uploadImage,
};
