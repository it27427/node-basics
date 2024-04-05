const app = require('./app');
const dotenv = require('dotenv');
const colors = require('colors');

dotenv.config({ path: './config/dotenv.env' });

const PORT = process.env.PORT || 3001;
const hostName = process.env.DB_HOST;

app.listen(PORT, () => {
  console.log(
    `Server is successfully listening at: http://${hostName}:${PORT} in ${process.env.NODE_ENV} Mode`
      .bgCyan
  );
});
