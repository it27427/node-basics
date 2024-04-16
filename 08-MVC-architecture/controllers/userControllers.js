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

const users = [
  {
    name: 'Istiak Hossain Tushar',
    age: 31,
  },
  {
    name: 'Abdullah Al Mamun',
    age: 32,
  },
  {
    name: 'Israt Jahan Hira',
    age: 26,
  },
  {
    name: 'Rubaiyat Jahan Nishi',
    age: 21,
  },
];

const addUsers = (req, res) => {};

module.exports = { getUsers, addUsers };
