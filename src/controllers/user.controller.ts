import { Request, Response } from "express";
import log from "../utils/logger";
import { omit } from "lodash";
import { createUser } from "../service/user.service";
import { CreateUserInput } from "../schema/user.schema";

export async function createUserHandler(
  req: Request<{}, {}, CreateUserInput["body"]>,
  res: Response
) {
  try {
    // Call createUser service
    const user = await createUser(req.body);
    res.send(omit(user.toJSON(), "password"));
  } catch (e: any) {
    log.error(e);

    return res.status(409).send(e.message);
  }
}
