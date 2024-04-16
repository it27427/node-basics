const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');

// DOT-ENV CONFIG
dotenv.config({ path: './config/.env' });

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(
    `Server is listening at http://localhost:${PORT} in ${process.env.NODE_ENV} mode`
  );
});
