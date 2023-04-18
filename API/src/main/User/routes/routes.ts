import { Router } from "express";
import { ensureAuthenticated } from "../../../middlewares/ensureAuthenticated";
import { AuthenticateUserController } from "../AuthenticateUser/AuthenticateUserController";
import { CreateUserController } from "../CreateUser/CreateUserController";
import { GetUserByIdController } from "../GetUserById/GetUserByIdController";
import { VerifyUserTokenController } from "../VerifyUserToken/VerifyUserTokenController";
import { UpdateUserController } from "../UpdateUser/UpdateUserController";

const UserRouter = Router();

const createUserController = new CreateUserController();
const authenticateUser = new AuthenticateUserController();
const getUserByIdCotroller = new GetUserByIdController();
const verifyUserToken = new VerifyUserTokenController();
const updateUserController = new UpdateUserController();

UserRouter.get(
    "/login",
    authenticateUser.authenticateUser
)

UserRouter.get(
    "/verifyUserToken",
    ensureAuthenticated,
    verifyUserToken.verifyUserToken
);

UserRouter.post(
    '/register',
    createUserController.createUser
);

UserRouter.get(
    "/:userId",
    ensureAuthenticated,
    getUserByIdCotroller.getUserById
);

UserRouter.put(
    "/atualizar",
    ensureAuthenticated,
    updateUserController.updateUser
);

export { UserRouter } 