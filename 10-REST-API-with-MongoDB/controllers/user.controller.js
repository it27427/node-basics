const { v4: uuidv4 } = require('uuid');
const User = require('../models/user.model');

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).send(users);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const getSingleUser = async (req, res) => {
  try {
    const user = await User.findOne({ id: req.params.id });
    res.status(200).send(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
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
    res.status(500).send(error.message);
  }
};

const updateUser = (req, res) => {
  res.status(200).json({
    message: 'Updated User',
  });
};

const deleteUser = async (req, res) => {
  try {
    await User.deleteOne({ id: req.params.id });
    res.status(200).json({
      message: 'User Deleted Successfully Done!',
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = {
  getAllUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
};
