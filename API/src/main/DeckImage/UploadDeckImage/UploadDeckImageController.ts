import { Request, Response } from "express";
import { UploadDeckImageService } from "./UploadDeckImageService";

export class UploadDeckImageController {

    async uploadImage(req: Request, res: Response) {
        const { deckId } = req.params;
        const { image } = req.body;

        const uploadDeckImageService = new UploadDeckImageService();
        const deckImage = await uploadDeckImageService.uploadImage(image, +deckId);

        res.json({ data: deckImage });
    };
};