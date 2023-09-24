import { Router } from "express";
import { ensureAuthenticated } from "../../middlewares/ensureAuthenticated";
import { DeleteDeckCardController } from "./DeleteDeckCard/DeleteDeckCardController";

const deleteDeckCardController = new DeleteDeckCardController();

export default (router: Router): void => {
    const deckCardRouter = Router();
    router.use('/deck-card', deckCardRouter);

    deckCardRouter.delete(
        "/:deckCardId",
        ensureAuthenticated,
        deleteDeckCardController.deleteDeckCard
    );
}; 