import { Router } from "express";
import RoomController from "../controller/RoomController";
import { checkJwt } from "../middlewares/checkJwt";

var router = Router();

router.get("/", [checkJwt],  RoomController.listAll);

router.get("/:id([0-9]+)",  [checkJwt],  RoomController.getOneById);

router.post("/",  [checkJwt],  RoomController.newRoom);

router.patch("/:id([0-9]+)", [checkJwt], RoomController.editRoom);

router.delete("/:id([0-9]+)", [checkJwt],  RoomController.deleteRoom);

export default router;