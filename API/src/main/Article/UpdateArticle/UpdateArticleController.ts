import { Request, Response } from "express";
import { UpdateArticleService } from "./UpdateArticleService";


export class UpdateArticleController {

    async updateArticle(req: Request, res: Response) {

        const { article, _user_id } = req.body;

        const updateArticleService = new UpdateArticleService();

        const updatedArticle = await updateArticleService.updateArticle(article, _user_id);

        res.json({ data: updatedArticle });
    };
};