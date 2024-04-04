const http = require('http');
const fs = require('fs');
const PORT = 3001;
const hostName = '127.0.0.1';

const server = http.createServer((req, res) => {
  const handleReadFile = (fileLocation, statusCode, req, res) => {
    fs.readFile(fileLocation, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        res.writeHead(statusCode, { 'Content-Type': 'text/html' });
        res.write(data);
        res.end();
      }
    });
  };

  if (req.url === '/') {
    handleReadFile('./views/index.html', 200, req, res);
  } else if (req.url === '/about') {
    handleReadFile('./views/about.html', 200, req, res);
  } else if (req.url === '/contact') {
    handleReadFile('./views/contact.html', 200, req, res);
  } else {
    handleReadFile('./views/notfound.html', 404, req, res);
  }
});

server.listen(PORT, () => {
  console.log(
    `Server is successfully listening at: http://${hostName}:${PORT}`
  );
});
