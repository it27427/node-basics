const { v4: uuidv4 } = require('uuid');

const users = [
  {
    id: uuidv4(),
    name: 'Istiak Hossain Tushar',
    email: 'istiak.tushar.it@gmail.com',
    phone: '01615922742',
  },
  {
    id: uuidv4(),
    name: 'Israt Jahan Hira',
    email: 'israt.hira@gmail.com',
    phone: '01915922742',
  },
];

module.exports = users;
