const path = require('path');

const getUpload = (req, res) => {
  res.sendFile(path.join(__dirname + '/../views/uploads.html'));
};

const uploadImage = (req, res) => {
  res.send('Image Uploaded');
};

module.exports = {
  getUpload,
  uploadImage,
};
