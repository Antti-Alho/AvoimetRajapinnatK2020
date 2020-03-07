import "reflect-metadata";
import * as express from "express";
import * as bodyParser from "body-parser";
import * as cors from "cors";
import * as path from "path";

import routes from "./routes/index";

const app = express();
const port = 3050;
const host = 'localhost';

app.use(cors())
app.use(bodyParser.json())
app.use('/', express.static(path.join(__dirname, 'public')));
app.use('/api/', routes);

app.listen(port, host, () => {
    console.log(`server started @ ${host}:${port}`)
});

// export app for testing purposes
export default app;