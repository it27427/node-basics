const http = require('http');

const server = http.createServer((req, res) => {
  res.end('<h1>Hello from node server</h1>');
});

const PORT = 8000;

server.listen(PORT, () => {
  console.log(`Server is successfully listening at: http://localhost:${PORT}`);
});
