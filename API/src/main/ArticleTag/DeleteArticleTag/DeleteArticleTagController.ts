import { Request, Response } from "express";
import { DeleteArticleTagService } from "./DeleteArticleTagService";

export class DeleteArticleTagController {

    async deleteArticleTag(req: Request, res: Response) {

        const { articleTagId } = req.params;

        const deleteArticleTagService = new DeleteArticleTagService();

        const deletedArticleTag = await deleteArticleTagService.deleteArticleTag(+articleTagId);

        res.json({ data: deletedArticleTag });
    };
};