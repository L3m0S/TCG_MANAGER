import  { Router } from "express";
import { ensureAuthenticated } from "../../../middlewares/ensureAuthenticated";
import { AuthenticateUserController } from "../AuthenticateUser/AuthenticateUserController";
import { CreateUserController } from "../CreateUser/CreateUserController";

const UserRouter = Router();

const createUserController = new CreateUserController();
const authenticateUser = new AuthenticateUserController();

UserRouter.get(
    "/login",
    authenticateUser.authenticateUser
)

UserRouter.post(
    '/register',
    ensureAuthenticated,
    createUserController.createUser
)

export { UserRouter } 