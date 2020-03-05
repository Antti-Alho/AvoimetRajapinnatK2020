import { Router } from "express";
import UserController from "../controller/UserController";
import RoomController from "../controller/RoomController";

const router = Router();

router.get("/", UserController.listAll);

router.get("/:id([0-9]+)", UserController.getOneById);

router.post("/", UserController.newUser);

router.patch("/:id([0-9]+)", UserController.editUser);

router.delete("/:id([0-9]+)", UserController.deleteUser);

export default router;