import { Request, Response, NextFunction } from "express";
import * as jwt from "jsonwebtoken";
import config from "../config/config";

export const checkJwt = (req: Request, res: Response, next: NextFunction) => {
    const token = <string>req.headers["auth"];
    let jwtPayload;

    try {
        jwtPayload = <any>jwt.verify(token, config.jwtSecret);
        res.locals.jwtPayload = jwtPayload;
    } catch (error) {
        res.status(401).send("Invalid or expired authorization token. Please login again.");
        return;
    }

    const { id } = jwtPayload;
    const newToken = jwt.sign({ id }, config.jwtSecret, {
        expiresIn: "2h"
    });
    res.setHeader("token", newToken);
    next();
};