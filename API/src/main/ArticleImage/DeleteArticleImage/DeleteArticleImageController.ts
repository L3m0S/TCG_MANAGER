import { Request, Response } from "express";
import { DeleteArticleImageService } from "./DeleteArticleImageService";

export class DeleteArticleImageController {

    async deleteArticleThumbnail(req: Request, res: Response) {
        const { imageId } = req.params;

        const deleteArticleThumbnailService = new DeleteArticleImageService();
        const deletedThumbnail = await deleteArticleThumbnailService.deleteDeckImage(+imageId);

        res.json({ data: deletedThumbnail });
    };
};