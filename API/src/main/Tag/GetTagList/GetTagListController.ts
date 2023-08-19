import { Request, Response } from "express";
import { GetTagListService } from "./GetTagService";


export class GetTagListController {

    async getTagList(req: Request, res: Response) {

        const params = req.query;

        const getTagListService = new GetTagListService();

        const tagList = await getTagListService.getTagList(params);

        return res.json({ data: tagList});
    };
};