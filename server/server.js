import http from "http";
import { Server } from "socket.io";
import app from "./index.js";
import { socketAuth } from "./middleware/checkAuth.js";
import { connectDB } from "./config/db.js";

await connectDB();

const server = http.createServer(app);
export const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
    credentials: true,
  },
});

io.use(socketAuth);

const onlineUser = new Map();

io.on("connection", (socket) => {
  const userId = socket.user.toString();
  socket.join(userId);

  const count = onlineUser.get(userId) || 0;
  onlineUser.set(userId, count + 1);

  io.emit("user status", [...onlineUser.keys()]);

  socket.on("disconnect", () => {
    const count = onlineUser.get(userId);

    if (count === 1) {
      onlineUser.delete(userId);
    } else {
      onlineUser.set(userId, count - 1);
    }

    io.emit("user status", [...onlineUser.keys()]);
  });
});

export const chatInstance = io.of("/chat").use(socketAuth);
chatInstance.to("6973091b9e9f433e1c5dbd5b").emit("receive:message", "msg");

server.listen(4000, () => {
  console.log("Server is running on port 4000");
});
