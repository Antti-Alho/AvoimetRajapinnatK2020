import { Router } from "express";
import RoomController from "../controller/RoomController";

const router = Router();

router.get("/", RoomController.listAll);

router.get("/:id([0-9]+)", RoomController.getOneById);

router.post("/", RoomController.newRoom);

router.patch("/:id([0-9]+)", RoomController.editRoom);

router.delete("/:id([0-9]+)", RoomController.deleteRoom);

export default router;
