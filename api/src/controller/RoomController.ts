import { Request, Response } from "express";

import conn from '../util/databaseConn';
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
        console.log(req.body)
        let room: Room = Object.assign( new Room(), req.body );
        const userRepository = (await conn).manager.getRepository(Room);
        try {
            await userRepository.save(room);
        } catch (e) {
            console.log(e)
        }
        res.status(201).send("Room created");
    };

    static editRoom = async (req: Request, res: Response) => {
        res.status(200).send("Edit successful");
    };

    static deleteRoom = async (req: Request, res: Response) => {
        res.status(200).send("Delete successful");
    };
};

export default UserController;