import "reflect-metadata";
import { createConnection } from "typeorm";
import { User } from "../entity/User";
import { Room } from "../entity/Room";
import { FileLocation } from "../entity/FileLocation";
import config from "../config/config"

import routes from "../routes";
import conf from "../config/config";

let conn

if (conf.NODE_ENV = "test") {
    conn = createConnection({
        name: 'test',
        type: 'mariadb',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'root',
        database: 'testDB',
        synchronize: true,
        entities: [User, Room, FileLocation]
    });
} else {
    conn = createConnection({
        name: 'dev',
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'root',
        database: 'test',
        synchronize: true,
        entities: [User, Room, FileLocation]
    })
}

export default conn;