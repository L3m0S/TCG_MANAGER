import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { ApiError } from "../helpers/apiErrors";

const ensureAuthenticated = (req: Request, res: Response, next: NextFunction) => {

    const authToken = req.headers.authorization;

    if (!authToken)
        throw new ApiError(`Não autorizado!`, 401);

    const token = authToken.split(" ")[1];

    try {
        const subject = verify(token, 'teste');

        req.body = {...req.body, user_id: subject.sub}
        
        
        return next();
    } catch (err) {
        throw new ApiError(`Não autorizado!`, 401);
    }
  
}

export { ensureAuthenticated }