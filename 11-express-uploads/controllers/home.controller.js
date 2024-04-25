const path = require('path');

const getHome = (req, res) => {
  res.sendFile(path.join(__dirname + '/../views/index.html'));
};

module.exports = {
  getHome,
};
