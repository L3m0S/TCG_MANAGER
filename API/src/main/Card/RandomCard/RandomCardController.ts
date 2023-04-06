import { Request, Response } from "express";
import { RandomCardService } from "./RandomCardService";

export class RandomCardController {

    async getRandomCard(req: Request, res: Response) {

        const randomCardService = new RandomCardService();

        const randomCard = await randomCardService.getRandomCard();

        return res.json({data: randomCard});
    };
};