import express from "express";
import {
  createChannel,
  deletedChannel,
  getChannels,
  updateChannel,
} from "../controllers/ChannelController.js";

const routes = express.Router();

routes.get("/:id", getChannels);

routes.post("/:id", createChannel);

routes.delete("/:id", deletedChannel);

routes.patch("/:id", updateChannel);

export default routes;
