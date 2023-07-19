import { Request, Response } from "express";
import { DeckListService } from "./DeckListService";

export class DeckListController {

    async getDeckList(req: Request, res: Response) {

        const page = req?.query?.page ?? 1;
        const pageSize = req?.query?.pageSize ?? 20

        const deckListService = new DeckListService();

        const deckList = await deckListService.getDeckList(+page, +pageSize);

        res.send({ data: deckList });
    }
}