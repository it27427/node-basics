const app = require('./app');
const dotenv = require('dotenv');

dotenv.config({ path: './config/dotenv.env' });

const PORT = process.env.PORT || 3001;
const hostName = process.env.DB_HOST;

app.listen();
