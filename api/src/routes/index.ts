import { Router } from "express";
import user from "./user";
import room from "./room";

const routes = Router();

routes.use("/user", user);
routes.use("/room", room);


export default routes;