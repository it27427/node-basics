const loginControl = (req, res) => {
  res.send('<h1>POST request at login route</h1>');
  res.end();
};

const registerControl = (req, res) => {
  res.send('<h1>POST request at register route</h1>');
  res.end();
};

module.exports = {
  loginControl,
  registerControl,
};
