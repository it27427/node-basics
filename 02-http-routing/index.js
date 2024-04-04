const http = require('http');
const fs = require('fs');
const PORT = 3001;
const hostName = '127.0.0.1';

const server = http.createServer((req, res) => {
  const handleReadFile = (statusCode, fileLocation) => {
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
    handleReadFile(200, './views/index.html');
  } else if (req.url === '/about') {
    handleReadFile(200, './views/about.html');
  } else if (req.url === '/contact') {
    handleReadFile(200, './views/contact.html');
  } else {
    handleReadFile(404, './views/notfound.html');
  }
});

server.listen(PORT, () => {
  console.log(
    `Server is successfully listening at: http://${hostName}:${PORT}`
  );
});
