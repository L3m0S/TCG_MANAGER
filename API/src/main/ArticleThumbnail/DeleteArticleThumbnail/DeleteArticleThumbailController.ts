import { Request, Response } from "express";
import { DeleteArticleThumbnailService } from "./DeleteArticleThumbaiService";

export class DeleteArticleThumbnailController {

    async deleteArticleThumbnail(req: Request, res: Response) {
        const { thumbnailId } = req.params;

        const deleteArticleThumbnailService = new DeleteArticleThumbnailService();
        const deletedThumbnail = await deleteArticleThumbnailService.deleteDeckImage(+thumbnailId);

        res.json({ data: deletedThumbnail });
    };
};