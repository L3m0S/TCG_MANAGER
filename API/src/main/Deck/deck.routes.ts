import { Router } from "express";
import { CreateDeckController } from "./CreateDeck/CreateDeckController";
import { DeckListController } from "./DeckList/DeckListController";
import { multerApp } from "../CloudStorage/config/multer";
import { UploadDeckImageController } from "../DeckImage/UploadDeckImage/UploadDeckImageController";
import { GetDeckByIdController } from "./GetDeckById/GetDeckByIdController";
import { DeleteDeckController } from "./DeleteDeck/DeleteDeckController";
import { ensureAuthenticated } from "../../middlewares/ensureAuthenticated";
import { UpdateDeckController } from "./UpdateDeck/UpdateDeckController";

const deckListController = new DeckListController();
const createDeckController = new CreateDeckController();
const uploadDeckImageController = new UploadDeckImageController();
const getDeckByIdController = new GetDeckByIdController();
const deleteDeckController = new DeleteDeckController();
const updateDeckController = new UpdateDeckController();

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
        ensureAuthenticated,
        createDeckController.createDeck
    );

    deckRouter.delete(
        "/:deckId",
        ensureAuthenticated,
        deleteDeckController.deleteDeck
    );

    deckRouter.put(
        "/",
        ensureAuthenticated,
        updateDeckController.updateDeck
    );
}; 