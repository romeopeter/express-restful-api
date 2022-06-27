import { AnyZodObject } from "zod";
import { Request, Response, NextFunction } from "express";

export default function validateResource(schema: AnyZodObject) {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse({
        body: req.body,
        query: req.query,
        params: req.params,
      });

      next();
    } catch (e: any) {
      return res.sendStatus(400).send(e.errors);
    }
  };
}
