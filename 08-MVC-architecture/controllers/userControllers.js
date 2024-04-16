const users = require('../models/usersModel');

const htmlForm = `
<form method="POST" action="/users">
  <input type="text" name="name" placeholder="Enter name" />
  <input type="number" name="age" placeholder="Enter age" />
  <button type="submit">Save User</button>
</form>
`;

const getUsers = (req, res) => {
  res.send(htmlForm);
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
