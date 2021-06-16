//serving html file using NodeJS

const http = require('http');
const fs = require('fs');
const fileContent = fs.readFileSync('tut.html');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'content-type': 'text/html' });
  res.end(fileContent);
});

server.listen(80, '127.0.0.1', () => {
  console.log(`server listening on port 80 and host '127.0.0.1'`);
});
