import { Request, Response } from "express";

import conn from '../util/databaseConn';
import { Room } from "../entity/Room";
import { User } from "../entity/User";

export class RoomController{

    static listAll = async (req: Request, res: Response) => {
        const roomRepository = (await conn).manager.getRepository(Room);
        var rooms = await roomRepository.find({ relations: ["users"] });
        res.send(rooms);
    };

    static getOneById = async (req: Request, res: Response) => {
        const roomRepository = (await conn).manager.getRepository(Room);
        var room = await roomRepository.findOne({ where: { id: req.params.id }, relations: ["users"] });
        //room.checkHands();
        //await roomRepository.save(room)
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
            res.status(500).send("Internal server error!");
            return;
        }
        res.status(201).send("Room created");
    };

    static editRoom = async (req: Request, res: Response) => {
        console.log(req.params.id);
        console.log(res.locals.jwtPayload.id);

        let room: Room;
        let user: User;
        const roomRepository = (await conn).manager.getRepository(Room);
        const userRepository = (await conn).manager.getRepository(User);
        
        try {
            room = await roomRepository.find({ relations: ["users"], where: { id: req.params.id } });
            user = await userRepository.find({ where: { id: res.locals.jwtPayload.id } });
            console.log(room);
            room[0].users.push(user[0]);
            console.log(room)
            await roomRepository.save(room[0]);
            console.log("jee")
            res.status(200).send("User joined room succesfully");
        } catch (e) {
            console.log(e);
            res.status(500).send("Internal server error!");
            return;
        }
    };

    static deleteRoom = async (req: Request, res: Response) => {
        const id = req.params.id.toString();
        const userRepository = (await conn).manager.getRepository(Room);
        const result = await userRepository.delete(id);
        res.status(200).send("Delete successful");
    };
};

export default RoomController;