const dotenv = require('dotenv');
dotenv.config({ path: '../dotenv.env' });

const dev = {
  app: {
    port: process.env.PORT || 4000,
  },
  db: {
    url: process.env.DB_URL || 'mongodb://localhost:27017/userDemoDB',
  },
};

module.exports = dev;
