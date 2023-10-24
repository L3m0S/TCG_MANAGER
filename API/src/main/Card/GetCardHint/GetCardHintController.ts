import { Request, Response } from "express";
import { GetCardHintService } from "./GetCardHintService";

export class GetCardHintController {

    async getCardHintController(req: Request, res: Response) {

        const { cardId } = req.params;

        const getCardHintService = new GetCardHintService();

        const hint = await getCardHintService.getCardHint(cardId);

        res.json({ data: hint });
    };
};