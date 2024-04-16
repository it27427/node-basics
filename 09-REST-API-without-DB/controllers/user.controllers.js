const path = require('path');
const { v4: uuidv4 } = require('uuid');
const users = require('../models/users.model');

const getAllUsers = (req, res) => {
  // res.sendFile(path.join(__dirname + '/../views/register.html'));
  res.status(200).json({
    users,
  });
};

const createUser = (req, res) => {
  const newUser = {
    id: uuidv4(),
    name: req.name,
    email: req.email,
    phone: req.phone,
  };
  users.push(newUser);
  res.status(200).json(users);
};

const updateUser = (req, res) => {
  res.status(200).json({
    message: 'User updated successfully',
  });
};

module.exports = {
  getAllUsers,
  createUser,
  updateUser,
};
