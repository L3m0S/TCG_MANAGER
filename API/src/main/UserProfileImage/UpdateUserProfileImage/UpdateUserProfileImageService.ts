import { ApiError } from "../../../helpers/apiErrors";
import { UploadImageService } from "../../CloudStorage/UploadImage/UploadImageService";
import { GetUserByIdService } from "../../User/GetUserById/GetUserByIdService";
import { DeleteUserProfileImageService } from "../DeleteUserProfileImage/DeleteUserProfileImageService";
import { UploadUserProfileImageRepository } from "../UploadUserProfileImageRepository";
import { IUserProfileImage } from "../interfaces/userProfileImageInterface";

export class UpdateUserProfileImageSerice {

    protected path = 'user/profile-images';

    async updateUserProfileImage(newimage: IUserProfileImage) {

        if (!newimage?.user) {
            throw new ApiError('Informe o usúario vinculado a imagem!', 400);
        };

        const getUserByIdService = new GetUserByIdService();
        const userExists = await getUserByIdService.getUserById(newimage.user.id);

        if (!userExists) {
            throw new ApiError('Usuário informado não encontrado!', 404);
        };

        const profileImageAlreadyExist = await UploadUserProfileImageRepository.findOneBy({
            user: {
                id: userExists.id
            }
        });

        if (profileImageAlreadyExist) {
            const deleteUserProfileImageService = new DeleteUserProfileImageService();

            await deleteUserProfileImageService.deleteUserProfileImage(profileImageAlreadyExist?.id)
        };

        const uploadImageService = new UploadImageService();
        const uploadedImage = await uploadImageService.uploadImage(this.path, newimage);

        newimage.url = uploadedImage.url;
        newimage.name = uploadedImage.fileName;
        newimage.original_name = newimage.originalName;

        const profileImage = await UploadUserProfileImageRepository.save(newimage);

        return profileImage;
    };
};