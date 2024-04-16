const express = require('express');
const router = express.Router();

const htmlForm = `
<form>
  <input type="text" name="name" placeholder="Enter name" />
  <input type="number" name="age" placeholder="Enter age" />
  <button type="submit">Save User</button>
</form>
`;

router.get('/users', (req, res) => {
  res.send('Hello from user routes');
});

module.exports = router;
