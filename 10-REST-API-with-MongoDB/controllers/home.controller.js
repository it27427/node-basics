const path = require('path');

const getHomeController = (req, res) => {
  res.sendFile(path.join(__dirname + '/../views/index.html'));
};

module.exports = {
  getHomeController,
};
