import { Request, Response } from "express";
import * as jwt from "jsonwebtoken";

import { User } from "../entity/User";
import config from "../config/config";
import conn from "../util/databaseConn";

class AuthController {

    static login = async (req: Request, res: Response) => {
        let { email, password } = req.body;
        console.log(req.body)
        if (!(email && password)) {
            res.status(400).send();
            return;
        }
        const userRepository = (await conn).manager.getRepository(User);
        let user: User;
        try {
            user = await userRepository.findOneOrFail({ where: { email } });
        } catch (error) {
            res.status(401).send("Invalid email or Password");
            console.log(error);
            return
        }

        if (!user.checkPass(password)) {
            res.status(401).send("Invalid email or password");
            return;
        }

        const token = jwt.sign(
            { id: user.id, },
            config.jwtSecret,
            { expiresIn: "4h" }
        );
        res.send(token);
    };

}
export default AuthController
