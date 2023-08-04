import { ref, deleteObject } from 'firebase/storage';
import { storage } from '../cloudStorageConnection';
import { ApiError } from '../../../helpers/apiErrors';

export class DeleteImageService {

    async deleteImage(imagePath: string) {
        
        if (!imagePath) {
            throw new ApiError(`Informe o caminho da imagem a ser excluida!`, 400);
        };

        const imageRef = ref(storage, imagePath);

        await deleteObject(imageRef).catch((err) => {
            throw new ApiError(`${err.message}`, 500);
        });

        return;
    };
};