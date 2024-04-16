const homeController = (req, res) => {
  res.send('<h1>Hello from Home Route</h1>');
};

module.exports = {
  homeController,
};
