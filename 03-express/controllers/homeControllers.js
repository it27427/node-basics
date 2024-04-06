const getControl = (req, res) => {
  res.send('<h1>Get Route Home Controller</h1>');
};

const postControl = (req, res) => {
  res.send('<h1>Post Route Home Controller</h1>');
};

const putControl = (req, res) => {
  res.send('<h1>Put Route Home Controller</h1>');
};

const deleteControl = (req, res) => {
  res.send('<h1>Delete Route Home Controller</h1>');
};

module.exports = {
  getControl,
  postControl,
  putControl,
  deleteControl,
};
