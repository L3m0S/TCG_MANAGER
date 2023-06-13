import { Router } from "express";
import { GetTypeListController } from "./GetTypeList/GetTypeListController";

const getTypeListController = new GetTypeListController();

export default (router: Router): void => {
    const pokemonTypeRouter = Router();
    router.use('/type', pokemonTypeRouter);

    pokemonTypeRouter.get(
        "/",
        getTypeListController.getTypeList
    );
};