import { Router } from "express";
import { CreateDeckController } from "./CreateDeck/CreateDeckController";
import { DeckListController } from "./DeckList/DeckListController";
import { multerApp } from "../CloudStorage/config/multer";
import { UploadDeckImageController } from "../DeckImage/UploadDeckImage/UploadDeckImageController";
import { GetDeckByIdController } from "./GetDeckById/GetDeckByIdController";


const deckListController = new DeckListController();
const createDeckController = new CreateDeckController();
const uploadDeckImageController = new UploadDeckImageController();
const getDeckByIdController = new GetDeckByIdController();

export default (router: Router): void => {
    const deckRouter = Router();
    router.use('/deck', deckRouter);

    deckRouter.get(
        "/",
        deckListController.getDeckList
    );

    deckRouter.get(
        "/:id",
        getDeckByIdController.getDeckById
    );

    deckRouter.post(
        "/",
        createDeckController.createDeck
    );

    deckRouter.post(
        "/upload-image",
        multerApp.single('file'),
        uploadDeckImageController.uploadImage
    );
}; 