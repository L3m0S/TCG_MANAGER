import  { Router } from "express";
import { ensureAuthenticated } from "../../../middlewares/ensureAuthenticated";
import { AuthenticateUserController } from "../AuthenticateUser/AuthenticateUserController";
import { CreateUserController } from "../CreateUser/CreateUserController";
import { GetUserByIdController } from "../GetUserById/GetUserByIdController";
import { GetProfileController } from "../Getprofile/GetProfileController";

const UserRouter = Router();

const createUserController = new CreateUserController();
const authenticateUser = new AuthenticateUserController();
const getUserByIdCotroller = new GetUserByIdController();
const getProfileController = new GetProfileController();

UserRouter.post(
    "/login",
    authenticateUser.authenticateUser
)

UserRouter.post(
    '/register',
    createUserController.createUser
)
 
UserRouter.get(
    "/getProfile",
    ensureAuthenticated,
    getProfileController.getUserById
)

UserRouter.get(
    "/:userId",
    getUserByIdCotroller.getUserById
)



export { UserRouter } 