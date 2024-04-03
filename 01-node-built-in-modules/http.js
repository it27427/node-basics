const http = require('http');

const server = http.createServer((req, res) => {
  res.end('<h1>Hello from node server</h1>');
});

const PORT = 8000;
const hostName = '127.0.0.1';

server.listen(PORT, () => {
  console.log(
    `Server is successfully listening at: http://${hostName}:${PORT}`
  );
});
