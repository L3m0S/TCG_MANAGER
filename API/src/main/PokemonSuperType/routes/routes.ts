import { Router } from "express";
import { GetSuperTypeListController } from "../GetTypeList/GetTypeListController";

const SuperTypeRouter = Router();

const getTypeListController = new GetSuperTypeListController();

SuperTypeRouter.get(
    "/",
    getTypeListController.getSuperTypeList
)

export { SuperTypeRouter } 