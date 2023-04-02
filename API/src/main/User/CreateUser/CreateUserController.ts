import { Request, Response } from "express";        
import { CreateUserService } from "./CreateUserService";

export class CreateUserController {

    async createUser(req: Request, res: Response) {
        const {email, password, name} = req.body;

        const createUserService =  new CreateUserService();

        const userCreated = await createUserService.createUser(email, password, name);

        return res.json(userCreated); 
    }
}