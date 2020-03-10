import "reflect-metadata";
import * as express from "express";
import * as bodyParser from "body-parser";
import * as cors from "cors";
import * as path from "path";

import routes from "./routes/index";
import conf from "./config/config";

const app = express();
const port = conf.PORT;
const host = conf.HOST;

app.use(cors())
app.use(express.json())
app.use('/', express.static(path.join(__dirname, 'public')));

app.use('/api/', routes);

app.listen(port, host, () => {
    console.log(`server started @ ${host}:${port}`)
});

export default app;
