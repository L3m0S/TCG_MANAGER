import  { Router } from "express";
import { ensureAuthenticated } from "../../middlewares/ensureAuthenticated";
import { CardListController } from "./CardList/CardListController";
import { GetCardByIdController } from "./GetCardById/GetCardByIdController";
import { RandomCardController } from "./RandomCard/RandomCardController";

const cardListController = new CardListController();
const randomCardController = new RandomCardController();
const getCardByIdController = new GetCardByIdController();

export default (router: Router): void => { 
    const cardRouter = Router();
    router.use('/card', cardRouter);

    cardRouter.get(
        "/",
        cardListController.getCardList
    )
    
    cardRouter.get(
        '/randomCard',
        randomCardController.getRandomCard
    )
    
    cardRouter.get(
        '/:id',
        getCardByIdController.getCardById
    )
}; 