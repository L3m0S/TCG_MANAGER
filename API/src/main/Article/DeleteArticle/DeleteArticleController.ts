import { Request, Response } from "express";
import { DeleteArticleService } from "./DeleteArticleService";


export class DeleteArticleController {

    async deleteArticle(req: Request, res: Response) {

        const { articleId } = req.params;
        const { _user_id } = req.body;

        const deleteArticleService = new DeleteArticleService();

        const deletedArticle = await deleteArticleService.deleteArticle(+articleId, +_user_id);

        res.json({ data: deletedArticle });
    };
};