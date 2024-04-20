const http = require('http');
const fs = require('fs');
const path = require('path');

const port = 5000;

const server = http.createServer((req, res) => {
  let filePath = path.join(__dirname, req.url);
  if (filePath === path.join(__dirname, '/')) {
    filePath = path.join(__dirname, 'index.html');
  }

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/html' });
      res.end('File not found');
    } else {
      let contentType = 'text/html';
      if (filePath.endsWith('.css')) {
        contentType = 'text/css';
      } else if (filePath.endsWith('.js')) {
        contentType = 'text/javascript';
      }
      res.writeHead(200, { 'Content-Type': contentType });
      res.write(data);
      res.end();
    }
  });
});

server.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
// await