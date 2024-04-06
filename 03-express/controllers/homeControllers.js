const getControl = (req, res) => {
  res.send('<h1>GET request from home route</h1>');
};

const postControl = (req, res) => {
  res.send('<h1>POST request from home route</h1>');
};

const putControl = (req, res) => {
  res.send('<h1>PUT request from home route</h1>');
};

const deleteControl = (req, res) => {
  res.send('<h1>DELETE request from home route</h1>');
};

module.exports = {
  getControl,
  postControl,
  putControl,
  deleteControl,
};
