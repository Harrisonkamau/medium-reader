require('dotenv').config();

const config = require('config');
const http = require('http');

const PORT = config.get('port');

const { getPosts } = require('./lib');

const server = http.createServer((req, res) => {
  res.writeHead(200);
  res.end('hello world');
});

server.listen(PORT, async () => {
    console.log(`Server running on ${PORT}`);
    await getPosts();
  }
);
