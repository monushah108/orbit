import { chatInstance } from "../server.js";

export const Sendrtm = (msg, Sid) => {
  chatInstance.to(Sid).emit("receive:message", msg);
};

export const Getrtm = (fn) => {
  chatInstance.on("connection", (socket) => {
    socket.on("send:message", fn);
  });
};

// fn(useId , msg)
