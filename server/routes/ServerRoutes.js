import express from "express";
import {
  AddMemberToServer,
  createServer,
  deleteServer,
  getAllserver,
  getserverMembers,
  LeaveServer,
  RemoveMemberFromServer,
  updateServer,
} from "../controllers/ServerController.js";
import multer from "multer";

const routes = express.Router();

const upload = multer({ storage: multer.memoryStorage() });

// Server CRUD
routes.post("/", upload.single("image"), createServer); // Create server
routes.get("/", getAllserver); // Get server info
routes.patch("/:id", updateServer); // Update server
routes.delete("/:id", deleteServer); // Delete server

// Members
routes.get("/:id/members", getserverMembers);
routes.post("/:id/join/:userId", AddMemberToServer);
routes.delete("/:id/leave/:userId", LeaveServer);
routes.delete("/:id/remove/:userId", RemoveMemberFromServer);

export default routes;
