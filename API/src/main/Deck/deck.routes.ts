import { Router } from "express";
import { CreateDeckController } from "./CreateDeck/CreateDeckController";
import { DeckListController } from "./DeckList/DeckListController";

const deckListController = new DeckListController();
const createDeckController = new CreateDeckController();

export default (router: Router): void => {
    const deckRouter = Router();
    router.use('/deck', deckRouter);

    deckRouter.get(
        "/",
        deckListController.getDeckList
    )

    deckRouter.post(
        "/",
        createDeckController.createDeck
    )
}; 