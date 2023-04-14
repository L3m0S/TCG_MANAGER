import  { Router } from "express";
import { ensureAuthenticated } from "../../../middlewares/ensureAuthenticated";
import { GetSetByIdController } from "../GetSetById/GetSetByIdController";
import { SetListController } from "../SetList/SetListController";


const SetsRouter = Router();

const getSetListController = new SetListController();
const getSetByIdController = new GetSetByIdController();

SetsRouter.get(
    "/",
    getSetListController.getSetList
);

SetsRouter.get(
    "/:id",
    getSetByIdController.getSetById
);

export { SetsRouter } ;