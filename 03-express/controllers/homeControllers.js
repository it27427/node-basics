const getControl = (req, res) => {
  res.send('<h1>This is GET request from home route</h1>');
};

const postControl = (req, res) => {
  res.send('<h1>This is POST request from home route</h1>');
};

const putControl = (req, res) => {
  res.send('<h1>This is PUT request from home route</h1>');
};

const deleteControl = (req, res) => {
  res.send('<h1>This is DELETE request from home route</h1>');
};

module.exports = {
  getControl,
  postControl,
  putControl,
  deleteControl,
};
