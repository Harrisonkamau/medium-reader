const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200);
  res.end('hello world');
});

server.listen(4000, () => console.log('Server running on 4000'));
