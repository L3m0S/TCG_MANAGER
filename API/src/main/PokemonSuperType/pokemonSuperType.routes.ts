import { Router } from "express";
import { GetSuperTypeListController } from "./GetTypeList/GetTypeListController";

const getTypeListController = new GetSuperTypeListController();

export default (router: Router): void => { 
    const pokemonSuperTypeRouter = Router();
    router.use('/super-type', pokemonSuperTypeRouter);

    pokemonSuperTypeRouter.get(
        "/",
        getTypeListController.getSuperTypeList
    )
}