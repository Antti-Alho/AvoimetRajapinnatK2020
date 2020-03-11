import { Router } from "express";
import user from "./user";
import room from "./room";
import auth from "./auth";
import file from "./file";

const routes = Router();

routes.use("/user", user);
routes.use("/room", room);
routes.use("/auth", auth);
routes.use("/file", file);

export default routes;
