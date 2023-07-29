import { Request, Response } from "express";
import { GetDeckByIdService } from "./GetDeckByIdService";

export class GetDeckByIdController {

    async getDeckById(req: Request, res: Response) {

        const { id } = req.params;

        const getDeckByIdService = new GetDeckByIdService();

        const deck = await getDeckByIdService.getDeckById(+id);

        res.send({ data: deck });
    };
};