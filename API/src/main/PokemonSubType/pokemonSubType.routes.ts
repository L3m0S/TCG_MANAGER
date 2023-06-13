import { Router } from "express";
import { GetSubTypeListController } from "./PokemonSuperType/GetTypeList/GetTypeListController";

const getSubTypeListController = new GetSubTypeListController();

export default (router: Router): void => { 
    const subTypeRouter = Router();
    subTypeRouter.use('/sub-type', subTypeRouter);

    subTypeRouter.get(
        "/",
        getSubTypeListController.getSubTypeList
    );
};