import { Request, Response } from "express";
import { PokemonTCG } from 'pokemon-tcg-sdk-typescript';        
import { CreateUserService } from "./CreateUserService";

export class CreateUserController {

    async createUser(req: Request, res: Response) {
        const {email, password, name} = req.body;

        const createUserService =  new CreateUserService();

        // const userCreated = await createUserService.createUser(email, password, name);
        const randomPage = Math.floor(Math.random() * 256);
        const randomCardIndex = Math.floor(Math.random() * 256);

        const cards = await PokemonTCG.getAllCards({page:1, pageSize: 1});
      
        return res.json('teste');
    }
}