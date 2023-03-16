import { Request, Response } from "express";
import { GetCardByIdService } from "./GetCardByIdService";


export class GetCardByIdController {

    async getCardById(req: Request, res: Response) {
        const { id } = req.params;
        const getCardByIdService = new GetCardByIdService();

        const card = await getCardByIdService.getCardById(id);

        res.json(card);
    }
}