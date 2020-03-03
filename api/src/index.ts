import "reflect-metadata";
import {createConnection} from "typeorm";
import {User} from "./entity/User";
import { Request, Response } from "express";
import * as express from "express";
import * as bodyParser from "body-parser";
import * as path from "path";

import routes from "./routes";

createConnection({
    name: 'dev',
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'root',
    database: 'ChinaHand',
    synchronize: true,
    entities: [User]
}).then( connection => {
    const app = express();
    const port = 3050;
    const host = 'localhost';

    app.use(bodyParser.json())
    app.use('/', express.static(path.join(__dirname, 'public')));
    app.use('/api/', routes);

    app.get('/asd', async function (req: Request, res: Response) {
        res.send("asd");
    });

    app.listen(port, host, () => {
        console.log(`server started @ ${host}:${port}`)
    });
}).catch(error => console.log(error));