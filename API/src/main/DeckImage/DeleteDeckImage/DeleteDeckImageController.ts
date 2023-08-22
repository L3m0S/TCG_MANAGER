import { Request, Response } from "express";
import { DeleteDeckImageService } from "./DeleteDeckImageService";

export class DeleteImageController {

    async deleteDeckImage(req: Request, res: Response) {
        const { imageId } = req.params;

        const deleteDeckImageService = new DeleteDeckImageService();
        const deletedImage = await deleteDeckImageService.deleteDeckImage(+imageId);

        res.json({ data: deletedImage });
    };
};