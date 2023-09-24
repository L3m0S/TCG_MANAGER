import { Request, Response } from "express";
import { DeleteDeckService } from "./DeleteDeckService";


export class DeleteDeckController {

    async deleteDeck(req: Request, res: Response) {

        const { deckId } = req.params;
        const { _user_id } = req.body;

        const deleteDeckService = new DeleteDeckService();

        const deletedDeck = await deleteDeckService.deleteDeck(+deckId, +_user_id);

        res.json({data: deletedDeck});
    };
};