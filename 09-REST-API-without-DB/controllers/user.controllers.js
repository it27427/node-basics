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
  const id = req.params.id;
  const { name, email, phone } = req.body;

  users
    .filter((user) => user.id === id)
    .map((selectedUser) => {
      selectedUser.name = name;
      selectedUser.email = email;
      selectedUser.phone = phone;
    });

  res.status(200).json(users);
};

module.exports = {
  getAllUsers,
  createUser,
  updateUser,
};
