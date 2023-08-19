import { Request, Response } from "express";
import { CreateUserService } from "./CreateUserService";

export class CreateUserController {

    async createUser(req: Request, res: Response) {
        const { email, password, name, user_name } = req.body;

        const createUserService = new CreateUserService();

        const createdUser = await createUserService.createUser(email, password, name, user_name);

        return res.json({ data: createdUser });
    }
}