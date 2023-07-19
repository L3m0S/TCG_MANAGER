import { Request, Response } from "express";
import { ArticleListService } from "./ArticleListService";


export class ArticleListController {

    async getArticleList(req: Request, res: Response) {

        const page = req?.query?.page ?? 1;
        const pageSize = req?.query?.pageSize ?? 20;
        const searchParams = req?.query;

        const articleListService = new  ArticleListService();

        const articleList = await articleListService.getArticleList(+page, +pageSize, searchParams);

        res.send({ data: articleList });
    }
}