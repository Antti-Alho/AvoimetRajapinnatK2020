import "reflect-metadata";
import { createConnection } from "typeorm";
import { User } from "./entity/User";
import { Room } from "./entity/Room";

import routes from "./routes";

const conn = createConnection({
    name: 'dev',
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'root',
    database: 'test',
    synchronize: true,
    entities: [User, Room]
})

export default conn;