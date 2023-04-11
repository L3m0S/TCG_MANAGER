import { Router } from "express";
import { GetSubTypeListController } from "../GetTypeList/GetTypeListController";

const SubTypeRouter = Router();

const getSubTypeListController = new GetSubTypeListController();

SubTypeRouter.get(
    "/",
    getSubTypeListController.getSubTypeList
)

export { SubTypeRouter };