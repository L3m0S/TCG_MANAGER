import { Request, Response } from "express";
import { GetArticleCommentListService } from "./GetArticleCommentListService";

export class GetArticleCommentListController {

    async getCommentList(req: Request, res: Response) {
        const params = req?.query;

        const getArticleCommentListService = new GetArticleCommentListService();

        const commentList = await getArticleCommentListService.getCommentList(params);

        res.json({ data: commentList });
    };
};