import { Request, Response } from "express";        
import { CreateUserService } from "./CreateUserService";
import { sign } from "jsonwebtoken";

export class CreateUserController {

    async createUser(req: Request, res: Response) {
        const {email, password, name, user_name} = req.body;

        const createUserService =  new CreateUserService();

        const userCreated = await createUserService.createUser(email, password, name, user_name);

        const token = sign({
            email: userCreated.email
        }, 'teste', {
            subject: `${userCreated.id}`,
            expiresIn: '1d'
        });

        return res.json({data:{token}}); 
    }
}