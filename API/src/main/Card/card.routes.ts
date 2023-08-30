import  { Router } from "express";
import { ensureAuthenticated } from "../../middlewares/ensureAuthenticated";
import { CardListController } from "./CardList/CardListController";
import { GetCardByIdController } from "./GetCardById/GetCardByIdController";
import { RandomCardController } from "./RandomCard/RandomCardController";
import { GetCardHintController } from "./GetCardHint/GetCardHintController";

const cardListController = new CardListController();
const randomCardController = new RandomCardController();
const getCardByIdController = new GetCardByIdController();
const getCardHintController = new GetCardHintController();

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

    cardRouter.get(
        '/getCardHint/:cardName',
        getCardHintController.getCardHintController
    )
}; 