const path = require('path');

const getUpload = (req, res) => {
  res.sendFile(path.join(__dirname + '/./views/uploads.html'));
};

module.exports = {
  getUpload,
};
