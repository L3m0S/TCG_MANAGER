import { Request, Response } from "express";
import { GetUserByIdService } from "./GetUserByIdService";


export class GetUserByIdController {

    async getUserById(req: Request, res: Response) {

        const { userId } = req.params;
        console.log(req.params)
        const userService = new GetUserByIdService(); 

        const user = await userService.getUserById(+userId);

        res.json(user); 
    }
}