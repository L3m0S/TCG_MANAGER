import { Request, Response } from "express";
import { UpdateDeckService } from "./UpdateDeckService";


export class UpdateDeckController {

    async updateDeck(req: Request, res: Response) {
        const { deck, _user_id } = req.body;

        const updateDeckService = new UpdateDeckService();

        const updatedDeck = await updateDeckService.updateDeck(deck, _user_id);

        res.json({ data: updatedDeck });
    };
};