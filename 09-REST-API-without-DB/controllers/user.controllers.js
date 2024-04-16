const path = require('path');

const getUserController = (req, res) => {
  res.sendFile(path.join(__dirname + '/../views/register.html'));
};

module.exports = {
  getUserController,
};
