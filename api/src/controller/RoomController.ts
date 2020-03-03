import { Request, Response } from "express";
import conn from '../databaseConn';

import { Room } from "../entity/Room";

export class UserController{

    static listAll = async (req: Request, res: Response) => {
        const userRepository = (await conn).manager.getRepository(Room);
        var rooms = await userRepository.find();
        res.send(rooms);
    };

    static getOneById = async (req: Request, res: Response) => {
        const userRepository = (await conn).manager.getRepository(Room);
        var room = await userRepository.find(req.params.id);
        res.status(200).send(room);
    };

    static newRoom = async (req: Request, res: Response) => {
        res.status(201).send("User created");
    };

    static editRoom = async (req: Request, res: Response) => {
        res.status(200).send("Edit successful");
    };

    static deleteRoom = async (req: Request, res: Response) => {
        res.status(200).send("Delete successful");
    };
};

export default UserController;