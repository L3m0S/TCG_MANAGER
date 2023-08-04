import { Request, Response } from "express";
import { UploadArticleImageService } from "./UploadArticleImageService";
import { IFile } from "../../../interfaces/fileInterface";

export class UploadDeckImageController {

    async uploadImage(req: Request, res: Response) {
        const { articleId } = req.params;
        const { image } = req.body as { image: IFile };

        const uploadArticleImageService = new UploadArticleImageService();
        const ArticleImage = await uploadArticleImageService.uploadImage(image, +articleId);

        res.send({ data: ArticleImage });
    };
};