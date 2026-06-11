import { socketAuth } from "../middleware/checkAuth.js";
import { io } from "../server.js";

export function ServerChatnpc() {
  const Serverchat = io.of("/serverChat");
  Serverchat.use(socketAuth);

  Serverchat.on("connection", (socket) => {
    socket.on("group:join", ({ groupId, userId }) => {
      socket.join(`group:${groupId}`);
    });

    socket.on("group:message", ({ groupId, message }) => {
      io.to(`group:${groupId}`).emit("group:message", {
        id,
        senderId,
        conversationId,
        createdAt,
      });
    });
  });
}

export function ServerVoicenpc() {
  const serverVoice = io.of("/serverVoice");
  serverVoice.use(socketAuth);

  serverVoice.on("connection", (socket) => {
    socket.on("voice:join", ({ channelId, peerId, userId }) => {
      socket.join(`voice:${channelId}`);

      socket.to(`voice:${channelId}`).emit("user:joined", {
        peerId,
        userId,
      });
    });

    socket.on("voice:leave", ({ channelId, peerId }) => {
      socket.to(`voice:${channelId}`).emit("user:left", peerId);
    });
  });
}
