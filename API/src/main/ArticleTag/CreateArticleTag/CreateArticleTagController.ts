import { Request, Response } from "express";
import { CreateArticleTagService } from "./CreateArticleTagService";

export class CreateArticleTagController {

    async createArticleTag(req: Request, res: Response) {

        const articleTag = req.body;

        const createArticleTagService = new CreateArticleTagService();

        const createdArticleTag = await createArticleTagService.createArticleTag(articleTag);

        res.json({ data: createdArticleTag });
    };
};