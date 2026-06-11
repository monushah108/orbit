import express from "express";

import cors from "cors";
import cookieParser from "cookie-parser";
import UserRoute from "./routes/UserRoute.js";
import ChatRoute from "./routes/chatRoutes.js";
import ServerRoutes from "./routes/ServerRoutes.js";
import ChannelRoutes from "./routes/ChannelRoutes.js";
import MessageRoutes from "./routes/MessageRoutes.js";
import FriendRoutes from "./routes/FriendRoutes.js";
import CheckAuth from "./middleware/checkAuth.js";

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);
app.use(express.json());
app.use(cookieParser("my-secret-key"));

app.use("/", UserRoute);
app.use("/chat", CheckAuth, ChatRoute); // for chat Room
app.use("/server", CheckAuth, ServerRoutes);
app.use("/channel", CheckAuth, ChannelRoutes);
app.use("/message", CheckAuth, MessageRoutes); // for messagin in chat room
app.use("/friend", CheckAuth, FriendRoutes);

app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.status || 500).json({ error: "something went wrong!" });
});

export default app;
