import { Router } from "express";
import { UploadUserProfileImageController } from "./UploadUserProfileImage/UploadUserProfileImageController";
import { DeleteUserProfileImageController } from "./DeleteUserProfileImage/DeleteUserProfileImageController";
import { UpdateUserProfileImageController } from "./UpdateUserProfileImage/UpdateUserProfileImageController";

const uploadUserProfileImageController = new UploadUserProfileImageController();
const deleteUserProfileImageController = new DeleteUserProfileImageController();
const updateUserProfileImageController = new UpdateUserProfileImageController();

export default (router: Router): void => {
    const UserPorfileImageRouter = Router();
    router.use('/user-profile-image', UserPorfileImageRouter);

    UserPorfileImageRouter.post(
        "/",
        uploadUserProfileImageController.uploadImage
    );

    UserPorfileImageRouter.delete(
        "/:profileImageId",
        deleteUserProfileImageController.deleteUserProfileImage
    );

    UserPorfileImageRouter.put(
        "/update-profile-image",
        updateUserProfileImageController.uploadImage
    );
};