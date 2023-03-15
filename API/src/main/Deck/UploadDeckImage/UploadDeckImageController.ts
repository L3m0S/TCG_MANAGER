import { Request, Response } from "express";
import { UploadDeckImageService } from "./UploadDeckImageService";


export class UploadDeckImageController {

    async uploadImage(req: Request, res: Response) {
        const {deckId } = req.body;
        const deckImage  = req.file;
        console.log(deckImage)
        const uploadDeckImageService = new UploadDeckImageService();
        uploadDeckImageService.uploadImage('teste', deckImage, '1');
    }
}