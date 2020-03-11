import { Router } from "express";
import user from "./user";
import room from "./room";
import auth from "./auth";

const routes = Router();

routes.use("/user", user);
routes.use("/room", room);
routes.use("/auth", auth);

export default routes;
