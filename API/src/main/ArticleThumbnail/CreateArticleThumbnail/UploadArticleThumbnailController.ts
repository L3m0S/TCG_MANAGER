import { Request, Response } from "express";
import { UploadArticleImageService } from "../../ArticleImage/UploadArticleImage/UploadArticleImageService";
import { UploadArticleThumbailService } from "./UploadArticleThumbnailService";

export class UploadArticleThumbailController {

    async uploadArticleThumbnail(req: Request, res: Response) {

        const articleTumbnail = req.body;

        const uploadArticleThumbnailService = new UploadArticleThumbailService();

        const uploadedArticleThumbnail = await uploadArticleThumbnailService.uploadArticleThumbnail(articleTumbnail);

        res.json({ data: uploadedArticleThumbnail });
    };
};