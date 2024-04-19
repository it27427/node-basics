const { v4: uuidv4 } = require('uuid');
const User = require('../models/user.model');

const getAllUsers = (req, res) => {
  res.status(200).json({
    message: 'All Users',
  });
};

const getSingleUser = (req, res) => {
  res.status(200).json({
    message: 'Single User',
  });
};

const createUser = async (req, res) => {
  try {
    const newUser = new User({
      id: uuidv4(),
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
    });
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    console.log(error);
  }
};

const updateUser = (req, res) => {
  res.status(200).json({
    message: 'Updated User',
  });
};

const deleteUser = (req, res) => {
  res.status(200).json({
    message: 'Deleted User',
  });
};

module.exports = {
  getAllUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
};
