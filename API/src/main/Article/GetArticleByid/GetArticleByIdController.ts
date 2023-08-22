import { Request, Response } from "express";
import { GetArticleByIdService } from "./GetArticleByIdService";
import { Article } from "../../../entities/Article.entity";

export class GetArticleByIdController {

    async getArticleById(req: Request, res: Response) {
        const { id } = req.params;

        const getArticleBydIdService = new GetArticleByIdService();

        const article = await getArticleBydIdService.getArticleBydId(+id);

        res.json({ data: article });
    };
};