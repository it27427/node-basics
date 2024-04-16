const htmlForm = `
<form method="POST" action="/users">
  <input type="text" name="name" placeholder="Enter name" />
  <input type="number" name="age" placeholder="Enter age" />
  <button type="submit">Save User</button>
</form>
`;

const addUser = (req, res) => {
  res.send(htmlForm);
};

module.exports = { addUser };
