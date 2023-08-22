import { Request, Response } from "express";
import { ArticleListService } from "./ArticleListService";


export class ArticleListController {

    async getArticleList(req: Request, res: Response) {

        const params = req.query;

        const articleListService = new  ArticleListService();

        const articleList = await articleListService.getArticleList(params);

        res.json({ data: articleList });
    };
};