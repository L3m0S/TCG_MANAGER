import { Router } from "express";
import { GetSubTypeListController } from "./PokemonSuperType/GetTypeList/GetTypeListController";

const getSubTypeListController = new GetSubTypeListController();

export default (router: Router): void => { 
    const subTypeRouter = Router();
    router.use('/sub-type', subTypeRouter);

    subTypeRouter.get(
        "/",
        getSubTypeListController.getSubTypeList
    );
};