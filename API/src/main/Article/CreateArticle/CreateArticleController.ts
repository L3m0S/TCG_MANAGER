import { Request, Response } from "express";
import { CreateArticleService } from "./CreateArticleService";

export class CreateArticleController {

    async createArticle(req: Request, res: Response) {

        const { article } = req.body;

        const createArticleService = new CreateArticleService();

        const createdArticle = createArticleService.createArticle(article);

        res.send({ data: createdArticle });
    }
}