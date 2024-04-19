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

const createUser = (req, res) => {
  res.status(201).json({
    message: 'Created User',
  });
};

const updateUser = (req, res) => {
  res.status(201).json({
    message: 'Updated User',
  });
};

module.exports = {
  getAllUsers,
  getSingleUser,
  createUser,
  updateUser,
};
