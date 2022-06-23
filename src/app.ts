import express from "express";
import routes from "./routes";
import config  from "config";
import connect from "./utils/connect";
import logger from "./utils/logger";

const port = config.get<number>("port");
const app = express();


app.listen(1337, async () => { 
    logger.info(`Server is running on http://localhost:${port}`);
    
    // Connects DB
    // connect();

    // URL Rotues
    routes(app);
})