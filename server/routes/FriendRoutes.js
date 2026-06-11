import express from "express";
import {
  acceptRequest,
  getFriends,
  removeFriend,
  sendFriendRequest,
} from "../controllers/FriendController.js";

const routes = express.Router();

routes.get("/", getFriends);

routes.delete("/:id", removeFriend);

routes.patch("/:id", acceptRequest);

routes.post("/", sendFriendRequest);

export default routes;
