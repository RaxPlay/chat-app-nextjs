// server.js
import { createServer } from 'node:http';
import next from 'next';
import { Server } from 'socket.io';

const app = next({ dev: process.env.NODE_ENV !== 'production' });
const handler = app.getRequestHandler();

app.prepare().then(() => {
  const httpServer = createServer(handler);
  const io = new Server(httpServer, {
    cors: { origin: 'http://localhost:5173' },
  });

  io.on('connection', (socket) => {
    // events here
  });

  httpServer.once('error', (err) => {
    console.error(err);
    process.exit(1);
  }).listen(3000, () => {
    console.log('Ready on http://localhost:3000');
  });
});