import { Request, Response } from "express";
import { GetSubTypeListService} from "./GetTypeListService";

export class GetSubTypeListController {

    async getSubTypeList(req: Request, res: Response) {

        const getSubTypeListService = new GetSubTypeListService();
        const subTypeList = await getSubTypeListService.getSubTypeList();

        res.json({ data: subTypeList });
    }
}