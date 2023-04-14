import { Request, Response } from "express";
import { GetSetByIdService } from "./GetSetByIdService";


export class GetSetByIdController {

    async getSetById(req: Request, res: Response) {

        const { id } = req.params;

        const getSetByIdService = new GetSetByIdService();

        const set = await getSetByIdService.GetSetById(id);

        res.send({ data: set });
    };
};