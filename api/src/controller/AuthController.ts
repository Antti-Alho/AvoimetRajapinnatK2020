import { Request, Response } from "express";
import * as jwt from "jsonwebtoken";
import { getRepository, MoreThan } from "typeorm";
import { validate } from "class-validator";
import { User } from "../entity/User";
import config from "../config/config";
import * as crypto from 'crypto';

class AuthController {

    static login = async (req: Request, res: Response) => {
        let { email, password } = req.body;
        if (!(email && password)) {
            res.status(400).send();
        }
        const userRepository = getRepository(User);
        let user: User;
        try {
            user = await userRepository.findOneOrFail({ where: { email } });
        } catch (error) {
            res.status(401).send("Invalid email or Password");
            console.log(error);
        }

        if (!user.checkPass(password)) {
            res.status(401).send("Invalid email or password");
            return;
        }

        const token = jwt.sign(
            { userId: user.id, email: user.email, firstname: user.name },
            config.jwtSecret,
            { expiresIn: "4h" }
        );
        res.send(token);
    };

}