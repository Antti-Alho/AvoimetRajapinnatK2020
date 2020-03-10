import "reflect-metadata";
import { createConnection } from "typeorm";
import { User } from "./entity/User";
import { Room } from "./entity/Room";
import config from "./config/config"

import routes from "./routes";
import conf from "./config/config";

let conn

if (conf.NODE_ENV = "test") {
    conn = createConnection({
        name: 'test',
        type: 'mariadb',
        host: 'localhost',
        port: 3306,
        username: config.DB_USER,
        password: config.DB_PASS,
        database: 'testDB',
        synchronize: true,
        entities: [User, Room]
    });
} else {
    conn = createConnection({
        name: 'dev',
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: config.DB_USER,
        password: config.DB_PASS,
        database: 'test',
        synchronize: true,
        entities: [User, Room]
    })
}

export default conn;