import { Request, Response, NextFunction } from "express";

export const verifyToken = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const beareHeader = req.headers["authorization"];
  if (typeof beareHeader === undefined) res.sendStatus(403);
  const bearer = beareHeader.split(" ");
  const [, beareToken] = bearer;

  req.token = beareToken;
  next();
};
