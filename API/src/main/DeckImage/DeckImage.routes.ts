import { Router } from "express";
import { multerApp } from "../CloudStorage/config/multer";
import { UploadDeckImageController } from "./UploadDeckImage/UploadDeckImageController";
import { DeleteImageController } from "./DeleteDeckImage/DeleteDeckImageController";

const uploadDeckImageController = new UploadDeckImageController();
const deleteDeckImageController = new DeleteImageController();

export default (router: Router): void => {
    const deckRouter = Router();
    router.use('/deck-image', deckRouter);

    deckRouter.post(
        "/:deckId",
        uploadDeckImageController.uploadImage
    );

    deckRouter.delete(
        "/:imageId",
        deleteDeckImageController.deleteDeckImage
    );
}; 