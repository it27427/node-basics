const path = require('path');
const users = require('../models/usersModel');

const getUsers = (req, res) => {
  res.sendFile(path.join(__dirname + '/../views/users.html'));
};

const createUsers = (req, res) => {
  const name = req.body.name;
  const age = Number(req.body.age);
  const user = {
    name,
    age,
  };

  users.push(user);

  res.status(201).json({
    success: true,
    users,
  });
};

module.exports = { getUsers, createUsers };
