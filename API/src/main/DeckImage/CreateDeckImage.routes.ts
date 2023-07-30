import { Router } from "express";
import { multerApp } from "../CloudStorage/config/multer";
import { UploadDeckImageController } from "../DeckImage/UploadDeckImage/UploadDeckImageController";

const uploadDeckImageController = new UploadDeckImageController();

export default (router: Router): void => {
    const deckRouter = Router();
    router.use('/deck-image', deckRouter);

    deckRouter.post(
        "/upload-image/:deckId",
        uploadDeckImageController.uploadImage
    );
}; 