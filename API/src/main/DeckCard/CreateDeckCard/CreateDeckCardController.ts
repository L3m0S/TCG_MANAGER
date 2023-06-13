import { Request, Response } from "express";
import { CreateDeckCardService } from "./CreateDeckCardService";

export class CreateDeckController {

    async createDeckCard(req: Request, res: Response) {

        const { deckCard } = req.body

        const createDeckService = new CreateDeckCardService();

        const createdDeckCard = createDeckService.createDeckCardService(deckCard);

        res.send({ data: createdDeckCard })
    }
}