import  { Router } from "express";
import { ensureAuthenticated } from "../../../middlewares/ensureAuthenticated";
import { AuthenticateUserController } from "../AuthenticateUser/AuthenticateUserController";
import { CreateUserController } from "../CreateUser/CreateUserController";
import { GetUserByIdController } from "../GetUserById/GetUserByIdController";

const UserRouter = Router();

const createUserController = new CreateUserController();
const authenticateUser = new AuthenticateUserController();
const getUserByIdCotroller = new GetUserByIdController();

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
    ensureAuthenticated,
    getUserByIdCotroller.getUserById
)

export { UserRouter } 