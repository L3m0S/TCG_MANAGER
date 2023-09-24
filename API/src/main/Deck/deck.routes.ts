import { Router } from "express";
import { CreateDeckController } from "./CreateDeck/CreateDeckController";
import { DeckListController } from "./DeckList/DeckListController";
import { multerApp } from "../CloudStorage/config/multer";
import { UploadDeckImageController } from "../DeckImage/UploadDeckImage/UploadDeckImageController";
import { GetDeckByIdController } from "./GetDeckById/GetDeckByIdController";
import { DeleteDeckController } from "./DeleteDeck/DeleteDeckController";
import { ensureAuthenticated } from "../../middlewares/ensureAuthenticated";


const deckListController = new DeckListController();
const createDeckController = new CreateDeckController();
const uploadDeckImageController = new UploadDeckImageController();
const getDeckByIdController = new GetDeckByIdController();
const deleteDeckController = new DeleteDeckController();

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

    deckRouter.delete(
        "/:deckId",
        ensureAuthenticated,
        deleteDeckController.deleteDeck
    );
}; 