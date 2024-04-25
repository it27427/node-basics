const path = require('path');
const multer = require('multer');
// const upload = multer({ dest: './public/images/uploads/' });

const getUpload = (req, res) => {
  res.sendFile(path.join(__dirname + '/../views/uploads.html'));
};

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '/tmp/my-uploads');
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + '-' + uniqueSuffix);
  },
});

const upload = multer({ storage: storage });

const uploadImage = (req, res) => {
  const img = req.body.image;
  res.send('Image Uploaded');
};

module.exports = {
  getUpload,
  uploadImage,
};
