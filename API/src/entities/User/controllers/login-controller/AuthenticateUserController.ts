import { Request, response, Response } from "express";

class AuthenticateUserController {

    async authenticateUser(req: Request, res: Response) {
        const {email, password} = req.body;

        const authenticateUserService = new AuthenticateUserService();

        const token = await authenticateUserService.authenticateUser(email, password);

        return response.json(token);
    }
}