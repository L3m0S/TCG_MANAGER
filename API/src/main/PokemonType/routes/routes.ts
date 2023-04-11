import { Router } from "express";
import { GetTypeListController } from "../GetTypeList/GetTypeListController";

const TypeRouter = Router();

const getTypeListController = new GetTypeListController();

TypeRouter.get(
    "/",
    getTypeListController.getTypeList
)

export { TypeRouter } 