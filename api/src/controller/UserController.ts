import { Request, Response } from "express";
import conn from '../databaseConn';
import { validate, validateOrReject } from "class-validator";

import { User } from "../entity/User";

export class UserController{

    static listAll = async (req: Request, res: Response) => {
        const userRepository = (await conn).manager.getRepository(User);
        var users = await userRepository.find();
        res.send(users);
    };

    static getOneById = async (req: Request, res: Response) => {
        const id: string = req.params.id;
        const userRepository = (await conn).manager.getRepository(User);
        let user
        console.log(id);
        try {
            user = await userRepository.findOne(id);
            console.log(user)
        }catch(e){
            console.log(e);
            res.status(404).send("User not found");
        }
        res.status(200).send(user);
    };

    static newUser = async (req: Request, res: Response) => {
        console.log(req.body)
        
        let user: User = Object.assign( new User(), req.body );

        validate(user).then(errors => {
            if (errors.length > 0){
                console.log("Validation failed. errors: ", errors);
                res.status(409).send(errors)
            } else {
                console.log("Validation OK")
            }
        });

        user.hashPassword();
        
        const userRepository = (await conn).manager.getRepository(User);
        try {
            await userRepository.save(user);
        } catch (e) {
            console.log(e)
        }
        res.status(201).send("User created");
    };

    static editUser = async (req: Request, res: Response) => {
        const id = req.params.id;
        const userRepository = (await conn).manager.getRepository(User);
        let user: User;

        try {
            user = await userRepository.findOneOrFail(id);
        } catch (error) {
            res.status(404).send("User not found");
            return;
        }

        let newUser: User = Object.assign(user, req.body);

        validate(user).then(errors => {
            if (errors.length > 0){
                console.log("Validation failed. errors: ", errors);
                res.status(409).send(errors)
            } else {
                console.log("Validation OK")
            }
        });

        try {
            await userRepository.save(newUser);
        } catch (e) {
            res.status(500).send("Internal server error");
            return;
        }
        res.status(200).send("Edit successful");
    };

    static deleteUser = async (req: Request, res: Response) => {
        const id = req.params.id.toString();
        const userRepository = (await conn).manager.getRepository(User);
        const result = await userRepository.delete(id);
        console.log(result)
        res.status(200).send("Delete successful");
    };
};

export default UserController;