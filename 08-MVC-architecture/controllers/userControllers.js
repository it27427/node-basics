const htmlForm = `
<form method="POST" action="/users">
  <input type="text" name="name" placeholder="Enter name" />
  <input type="number" name="age" placeholder="Enter age" />
  <button type="submit">Save User</button>
</form>
`;

const addUsers = (req, res) => {
  res.send(htmlForm);
};

const viewUsers = (req, res) => {};

module.exports = { addUsers, viewUsers };
