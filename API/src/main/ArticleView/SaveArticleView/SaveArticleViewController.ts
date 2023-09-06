import { Request, Response } from "express";
import { SaveArticleViewService } from "./SaveArticleViewService";


export class SaveArticleViewController {

    async saveArticleView(req: Request, res: Response) {

        const { articleId, userId } = req.params;

        const saveArticleViewService = new SaveArticleViewService();

        const articleView = await saveArticleViewService.saveArticleView(+articleId, +userId);

        res.json({ data: articleView })
    };
};