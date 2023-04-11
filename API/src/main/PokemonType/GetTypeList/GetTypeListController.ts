import { Request, Response } from "express";
import { GetTypeListService } from "./GetTypeListService";


export class GetTypeListController {

    async getTypeList(req: Request, res: Response) {

        const getTypeListService = new GetTypeListService();
        const typeList = await getTypeListService.getTypeList();

        res.json({data: typeList});
    }
}