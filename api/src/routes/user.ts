import { Router } from "express";
import UserController from "../controller/UserController";
import { checkJwt } from "../middlewares/checkJwt";

const router = Router();

router.get("/", UserController.listAll);

router.get("/:id([0-9]+)", UserController.getOneById);

router.post("/", UserController.newUser);

router.patch("/:id([0-9]+)", [checkJwt],  UserController.editUser);

router.delete("/:id([0-9]+)", [checkJwt],  UserController.deleteUser);

export default router;