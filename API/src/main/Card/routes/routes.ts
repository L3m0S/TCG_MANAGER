import  { Router } from "express";
import { ensureAuthenticated } from "../../../middlewares/ensureAuthenticated";
import { CardListController } from "../CardList/CardListController";
import { RandomCardController } from "../RandomCard/RandomCardController";

const CardsRouter = Router();

const cardListController = new CardListController();
const randomCardController = new RandomCardController();

CardsRouter.get(
    "/",
    ensureAuthenticated,
    cardListController.getCardList
)

CardsRouter.get(
    '/randomCard',
    ensureAuthenticated,
    randomCardController.getRandomCard
)

export { CardsRouter } 