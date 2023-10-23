import { Request, Response } from "express";
import { CreateArticleCommentService } from "./CreateArticleCommentService";

export class CreateArticleCommentController {

    async createArticleComment(req: Request, res: Response) {

        const { comment, _user_id } = req.body;

        const createArticleCommentService = new CreateArticleCommentService();

        const createdArticle = await createArticleCommentService.createArticleComment(comment, +_user_id);

        res.json({ data: createdArticle });
    };
};