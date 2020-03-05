import { Repository, Entity } from "typeorm";
import { User } from "../../src/entity/User";

import db from "../../src/databaseConn";

export class Util{

    static clear = async (type) => {
        const repository = (await db).manager.getRepository(type);
        await repository.query('DELETE FROM user;')
        await repository.query('ALTER TABLE user AUTO_INCREMENT = 0;')
    };

    static createAll = async (type, elements) => {
        const userRepository: Repository<User> = (await db).manager.getRepository(type);
        await userRepository.save(elements)
    };
}