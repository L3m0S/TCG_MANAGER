import { Router } from "express";
import { ensureAuthenticated } from "../../../middlewares/ensureAuthenticated";
import { AuthenticateUserController } from "../AuthenticateUser/AuthenticateUserController";
import { CreateUserController } from "../CreateUser/CreateUserController";
import { GetUserByIdController } from "../GetUserById/GetUserByIdController";
import { VerifyUserTokenController } from "../VerifyUserToken/VerifyUserTokenController";

const UserRouter = Router();

const createUserController = new CreateUserController();
const authenticateUser = new AuthenticateUserController();
const getUserByIdCotroller = new GetUserByIdController();
const verifyUserToken = new VerifyUserTokenController();

UserRouter.get(
    "/login",
    authenticateUser.authenticateUser
)

UserRouter.get(
    "/verifyUserToken",
    ensureAuthenticated,
    verifyUserToken.verifyUserToken
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