import express from "express";

import { Getchats } from "../controllers/ChatController.js";

const routes = express.Router();

routes.get("/:id", Getchats);

export default routes;
