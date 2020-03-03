import "reflect-metadata";
import { createConnection } from "typeorm";
import { User } from "../../src/entity/User";
import { Room } from "../../src/entity/Room";

const db = createConnection({
    name: 'test',
    type: 'mariadb',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'root',
    database: 'testDB',
    synchronize: true,
    entities: [User, Room]
});



export default db;