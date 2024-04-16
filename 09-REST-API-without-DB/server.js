const app = require('./app');
const colors = require('colors');

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(
    `Server is listening at http://localhost:${PORT} in ${process.env.NODE_ENV} mode`
      .bgBrightMagenta
  );
});
