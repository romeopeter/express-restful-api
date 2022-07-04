import express from "express";
import routes from "./routes";
import config  from "config";
import connect from "./utils/connect";
import logger from "./utils/logger";
import { json } from "body-parser";

const port = config.get<number>("port");
const app = express();

app.use(express.json());

app.listen(1337, async () => { 
    logger.info(`Server is running on http://localhost:${port}`);
    
    // DB connection
    connect();

    // URL Rotues
    routes(app);
})