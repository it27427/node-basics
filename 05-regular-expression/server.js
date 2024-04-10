const app = require('./app');
const colors = require('colors');

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(
    `Server is successfully listening at: http://localhost:${PORT} in ${process.env.NODE_ENV}`
      .bgBrightCyan
  );
});
