import  { Router } from "express";
import { ensureAuthenticated } from "../../../middlewares/ensureAuthenticated";
import { CardListController } from "../CardList/CardListController";
import { GetCardByIdController } from "../GetCardById/GetCardByIdController";
import { RandomCardController } from "../RandomCard/RandomCardController";

const CardsRouter = Router();

const cardListController = new CardListController();
const randomCardController = new RandomCardController();
const getCardByIdController = new GetCardByIdController();

CardsRouter.get(
    "/",
    cardListController.getCardList
)

CardsRouter.get(
    '/randomCard',
    ensureAuthenticated,
    randomCardController.getRandomCard
)

CardsRouter.get(
    '/:id',
    ensureAuthenticated,
    getCardByIdController.getCardById
)

export { CardsRouter } ;