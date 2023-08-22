
import { Request, Response } from "express";
import { CardListService } from "./CardListService";

export class CardListController {

    async getCardList(req: Request, res: Response) {

        const page = req?.query?.page ?? 1;
        const pageSize = req?.query?.pageSize ?? 20;
        const searchParams = req?.query?.searchParams ?? '';
        const orderByParams = req?.query?.orderBy ?? '';

        const cardListService = new CardListService();
        const cardList = await cardListService.getCardList(+page, +pageSize, `${searchParams}`, `${orderByParams}`);

        res.json({ data: cardList });
    }
}