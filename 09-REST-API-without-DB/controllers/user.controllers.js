const path = require('path');
const users = require('../models/users.model');

const getAllUsers = (req, res) => {
  // res.sendFile(path.join(__dirname + '/../views/register.html'));
  res.status(200).json({
    users,
  });
};

const createUser = (req, res) => {
  // res.sendFile(path.join(__dirname + '/../views/register.html'));
};

module.exports = {
  getAllUsers,
};
