import { Request, Response } from "express";
import { CreateDeckService } from "./CreateDeckService";

export class CreateDeckController {

    async createDeck(req: Request, res: Response) {
        const createDeckService = new CreateDeckService();

        const { deck } = req?.body;

        const createdDeck = await createDeckService.createDeck(deck);

        res.json({ data: createdDeck });
    }
}