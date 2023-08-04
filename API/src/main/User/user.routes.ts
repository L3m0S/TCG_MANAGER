import { Router } from "express";
import { ensureAuthenticated } from "../../middlewares/ensureAuthenticated";
import { AuthenticateUserController } from "./AuthenticateUser/AuthenticateUserController";
import { CreateUserController } from "./CreateUser/CreateUserController";
import { GetUserByIdController } from "./GetUserById/GetUserByIdController";
import { VerifyUserTokenController } from "./VerifyUserToken/VerifyUserTokenController";
import { UpdateUserController } from "./UpdateUser/UpdateUserController";

const createUserController = new CreateUserController();
const authenticateUser = new AuthenticateUserController();
const getUserByIdCotroller = new GetUserByIdController();
const verifyUserToken = new VerifyUserTokenController();
const updateUserController = new UpdateUserController();

export default (router: Router): void => {
    const UserRouter = Router();
    router.use('/user', UserRouter);

    UserRouter.get(
        "/login",
        authenticateUser.authenticateUser
    );

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
        "/",
        updateUserController.updateUser
    );
};