import { createServer } from "node:http";
import next from "next";
import { Server } from "socket.io";
import "dotenv/config";

const dev = process.env.NODE_ENV !== "production";
const hostname = process.env.HOSTNAME;
const port = parseInt(process.env.PORT || "3000", 10);

const app = next({ dev, hostname, port });
const handler = app.getRequestHandler();

app.prepare().then(() => {
  const httpServer = createServer(handler);
  const io = new Server(httpServer);

  io.on("connection", (socket) => {
    console.log(`User ${socket.id} entered server`);

    socket.on(
      "global-message",
      ({ messageContent, messagerName, messagerId }) => {
        console.log(
          `user ${messagerName} sent the following message: ${messageContent}`,
        );
        socket.broadcast.emit("global-message", { messagerName, messagerId, messageContent });
      },
    );
  });

  httpServer
    .once("error", (err) => {
      console.error(err);
      process.exit(1);
    })
    .listen(port, () => {
      console.log(`> Ready on http://${hostname}:${port}`);
    });
});
