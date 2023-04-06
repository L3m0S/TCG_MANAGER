import { Request, Response } from "express";
import { GetProfileService } from "./GetProfileService";


export class GetProfileController {

    async getUserById(req: Request, res: Response) {
            
        const userService = new GetProfileService(); 

        const user = await userService.getProfile(+req.body.user_id);

        res.json({data:user}); 
    } 
}