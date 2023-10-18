import { Request, Response } from "express";
import { DeleteArticleCommentService } from "./DeleteArticleCommentService";


export class DeleteArticleCommentController {

    async deleteComment(req: Request, res: Response) {
        const { commentId } = req.params;

        const deleteArticleCommentService = new DeleteArticleCommentService();

        const deletedArticle = await deleteArticleCommentService.deleteComment(+commentId);

        res.json({ data: deletedArticle });
    };
};