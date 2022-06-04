import { AnyZodObject } from "zod";
import { Request, Response, NextFunction } from "express";

export default function validate(schema: AnyZodObject) {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse({
        body: req.body,
        query: req.query,
        params: req.params,
      });
    } catch (e: any) {
      res.sendStatus(400).send(e.errors);
    }
  };
}
