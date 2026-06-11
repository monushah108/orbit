import { socketAuth } from "../middleware/checkAuth.js";
import { io } from "../server.js";

export function chatInstance() {
  const chat = io.of("/chat");
  chat.use(socketAuth);

  chat.on("connection", (socket) => {
    const user = socket.user.toString();
    socket.join(user);
  });
}
