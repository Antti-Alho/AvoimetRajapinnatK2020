import { Repository, Entity } from "typeorm";
import { User } from "../../src/entity/User";

import db from "../../src/util/databaseConn";

export class Util{

    static clear = async (type :any) => {
        const repository = (await db).manager.getRepository(type);
        await repository.query(`DELETE FROM ${type.name.toLowerCase()};`)
        await repository.query(`ALTER TABLE ${type.name.toLowerCase()} AUTO_INCREMENT = 0;`)
    };

    static createAll = async (type :any, elements :Array<any>) => {
        const userRepository: Repository<User> = (await db).manager.getRepository(type);
        await userRepository.save(elements)
    };
}
