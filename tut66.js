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
  //if port is 80 there is no need to mention it in url on browser as 127.0.0.1:80 but in case if there was some port other then 80  i have to mention it compulsory in the url on browswer as 127.0.0.1:X;
});
