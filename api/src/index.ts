import "reflect-metadata";
import * as express from "express";
import * as bodyParser from "body-parser";
import * as path from "path";

import routes from "./routes";

const app = express();
const port = 3050;
const host = 'localhost';

app.use(bodyParser.json())
app.use('/', express.static(path.join(__dirname, 'public')));
app.use('/api/', routes);

app.listen(port, host, () => {
    console.log(`server started @ ${host}:${port}`)
});