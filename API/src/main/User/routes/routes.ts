import  { Router } from "express";
import { ensureAuthenticated } from "../../../middlewares/ensureAuthenticated";
import { GetCardByIdController } from "../../Card/GetCardById/GetCardByIdController";
import { AuthenticateUserController } from "../AuthenticateUser/AuthenticateUserController";
import { CreateUserController } from "../CreateUser/CreateUserController";

const UserRouter = Router();

const createUserController = new CreateUserController();
const authenticateUser = new AuthenticateUserController();
const getUserByIdCotroller = new GetCardByIdController();

UserRouter.get(
    "/login",
    authenticateUser.authenticateUser
)

UserRouter.post(
    '/register',
    createUserController.createUser
)
 
UserRouter.get(
    "/:userId",
    getUserByIdCotroller.getCardById
)

export { UserRouter } 