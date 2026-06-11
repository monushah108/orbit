import express from "express";
import {
  Login,
  Profile,
  Register,
  SendNotification,
  getNotification,
} from "../controllers/UserController.js";
import CheckAuth from "../middleware/checkAuth.js";
import multer from "multer";

const routes = express.Router();

const upload = multer({ storage: multer.memoryStorage() });

routes.post("/login", Login);
routes.post("/register", upload.single("image"), Register);
routes.get("/profile", CheckAuth, Profile);

routes.post("/SendNotifications", CheckAuth, SendNotification);
routes.get("/getNotification", CheckAuth, getNotification);

export default routes;
