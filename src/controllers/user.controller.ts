import {Request, Response} from "express";
import log from "../utils/logger"
import { createUser } from "../service/user.service";

export async function createUserHandler(req: Request, res: Response) {
    try {
        // Call service to create user
       return await createUser(req.body);
    } catch (e: any) {
        log.error(e);
        res.sendStatus(409).send(e.message);
    }
}