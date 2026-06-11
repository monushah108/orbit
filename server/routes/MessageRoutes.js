import express from "express";
import {
  deleteMessage,
  getMessages,
  sendMessage,
  updateMessage,
} from "../controllers/MessageController.js";
import multer from "multer";

const routes = express.Router();
const upload = multer({ storage: multer.memoryStorage() });

routes.get("/:id", getMessages);

routes.post("/:id", upload.single("image"), sendMessage);

routes.patch("/:id", updateMessage);

routes.delete("/:id", deleteMessage);

export default routes;
