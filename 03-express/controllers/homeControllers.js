const getControl = (req, res) => {
  res.send('<h1>GET request from home route</h1>');
  res.end();
};

const postControl = (req, res) => {
  res.send('<h1>POST request from home route</h1>');
  res.end();
};

const putControl = (req, res) => {
  res.send('<h1>PUT request from home route</h1>');
  res.end();
};

const deleteControl = (req, res) => {
  res.send('<h1>DELETE request from home route</h1>');
  res.end();
};

module.exports = {
  getControl,
  postControl,
  putControl,
  deleteControl,
};
