const http = require('http');
const { WebSocketServer } = require('ws');
const wisp = require('@mercuryworkshop/wisp-js');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Wisp server is active');
});

const wss = new WebSocketServer({ server });

wss.on('connection', (ws, req) => {
  wisp.route(ws, req);
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Wisp server running on port ${PORT}`);
});
