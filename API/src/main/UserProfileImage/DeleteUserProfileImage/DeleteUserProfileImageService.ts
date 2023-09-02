import { ApiError } from "../../../helpers/apiErrors";
import { DeleteImageService } from "../../CloudStorage/DeleteImage/DeleteImageService";
import { UploadUserProfileImageRepository } from "../UploadUserProfileImageRepository";


export class DeleteUserProfileImageService {

    protected path = 'user/profile-images';

    async deleteUserProfileImage(profileImageId: number) {

        if (!profileImageId) {
            throw new ApiError(`Informe o id da imagem!`, 400);
        };

        const profileImageExists = await UploadUserProfileImageRepository.findOneBy({ id: profileImageId });

        if (!profileImageExists) {
            throw new ApiError(`Imagem informada não encontrada!`, 404);
        };

        const deletedImage = await UploadUserProfileImageRepository.delete({ id: profileImageId });

        const deleteImageService = new DeleteImageService();

        const imagePath = `${this.path}/${profileImageExists.name}`;
        await deleteImageService.deleteImage(imagePath);

        if (deletedImage.affected === 0) {
            throw new ApiError(`Imagem não encontrada!`, 404);
        };

        return deletedImage;
    };
};