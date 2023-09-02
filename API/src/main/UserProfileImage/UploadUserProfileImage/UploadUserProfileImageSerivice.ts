import { ApiError } from "../../../helpers/apiErrors";
import { UploadImageService } from "../../CloudStorage/UploadImage/UploadImageService";
import { GetUserByIdService } from "../../User/GetUserById/GetUserByIdService";
import { UploadUserProfileImageRepository } from "../UploadUserProfileImageRepository";
import { IUserProfileImage } from "../interfaces/userProfileImageInterface";

export class UploadUserProfileImageSerice {

    protected path = 'user/profile-images';

    async uploadImage(image: IUserProfileImage) {

        if (!image?.user) {
            throw new ApiError('Informe o deck vinculado a imagem!', 400);
        };

        const getUserByIdService = new GetUserByIdService();
        const userExists = await getUserByIdService.getUserById(image.user.id);

        if (!userExists) {
            throw new ApiError('Usuário informado não encontrado!', 404);
        };

        const profileImageAlreadyExist = await UploadUserProfileImageRepository.findOneBy({
            user: {
                id: userExists.id
            }
        });

        if (profileImageAlreadyExist) {
            throw new ApiError('Já existe uma imagem para o usuário!', 400);
        };

        const uploadImageService = new UploadImageService();
        const uploadedImage = await uploadImageService.uploadImage(this.path, image);

        image.url = uploadedImage.url;
        image.name = uploadedImage.fileName;
        image.original_name = image.originalName;

        const profileImage = await UploadUserProfileImageRepository.save(image);

        return profileImage;
    };
};