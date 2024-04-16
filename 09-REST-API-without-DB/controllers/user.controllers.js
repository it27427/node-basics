const path = require('path');
const users = require('../models/users.model');

const getUserController = (req, res) => {
  // res.sendFile(path.join(__dirname + '/../views/register.html'));
  res.status(200).json({
    users,
  });
};

module.exports = {
  getUserController,
};
