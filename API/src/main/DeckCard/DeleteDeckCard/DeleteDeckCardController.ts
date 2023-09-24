import { Request, Response } from "express";
import { DeleteDeckCardService } from "./DeleteDeckCardService";


export class DeleteDeckCardController {

    async deleteDeckCard(req: Request, res: Response) {

        const { deckCardId } = req.params;
        const { _user_id } = req.body;

        const deleteDeckCardService = new DeleteDeckCardService();

        const deletedDeckCard = await deleteDeckCardService.deleteDeckCard(+deckCardId, +_user_id);

        res.json({ data: deletedDeckCard });
    };
};