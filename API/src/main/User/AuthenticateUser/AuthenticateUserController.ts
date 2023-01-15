import { Request, Response } from "express";
import { AuthenticateUserService } from "./AuthenticateUserService";

export class AuthenticateUserController {

    async authenticateUser(req: Request, res: Response) {
        const {email, password} = req.body;

        const authenticateUserService = new AuthenticateUserService();

        const token = await authenticateUserService.authenticateUser(email, password);

        return res.json(token);
    }
}