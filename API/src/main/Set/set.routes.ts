import { Router } from "express";
import { ensureAuthenticated } from "../../middlewares/ensureAuthenticated";
import { GetSetByIdController } from "./GetSetById/GetSetByIdController";
import { SetListController } from "./SetList/SetListController";

const getSetListController = new SetListController();
const getSetByIdController = new GetSetByIdController();

export default (router: Router): void => {
    const setRouter = Router();
    router.use('/set', setRouter);

    setRouter.get(
        "/",
        getSetListController.getSetList
    );

    setRouter.get(
        "/:id",
        getSetByIdController.getSetById
    );
}