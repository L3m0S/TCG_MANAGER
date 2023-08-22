import { Request, Response } from "express";
import { UploadArticleImageService } from "./UploadArticleImageService";

export class UploadDeckImageController {

    async uploadImage(req: Request, res: Response) {
        const { image } = req.body;

        const uploadArticleImageService = new UploadArticleImageService();
        const ArticleImage = await uploadArticleImageService.uploadImage(image);

        res.json({ data: ArticleImage });
    };
};