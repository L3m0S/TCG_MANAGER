import { Request, Response } from "express";
import { DeckListService } from "./DeckListService";

export class DeckListController {

    async getDeckList(req: Request, res: Response) {

        const params = req?.query;
        const deckListService = new DeckListService();

        const deckList = await deckListService.getDeckList(params);

        res.send({ data: deckList });
    }
}