const app = require('./app');
const colors = require('colors');

const PORT = process.env.PORT || 3002;

app.listen(PORT, () => {
  console.log(
    `Server is successfully listening at http://localhost:${PORT} in ${process.env.NODE_ENV} mode`
      .bgGreen
  );
});