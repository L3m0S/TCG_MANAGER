import { Request, Response } from "express";
import { GetArticleViewService } from "./GetArticleViewService";


export class GetArticleViewController {

    async getArticleViews(req: Request, res: Response) {

        const { articleId } = req.params;

        const getArticleViewService = new GetArticleViewService();

        const viewsNumber = await getArticleViewService.getArticleViews(+articleId);

        res.json({ data: viewsNumber ?? 0 });
    };
};