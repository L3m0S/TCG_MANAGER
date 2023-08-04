import { ApiError } from "../../../helpers/apiErrors";
import { DeleteImageService } from "../../CloudStorage/DeleteImage/DeleteImageService";
import { DeckImageRepository } from "../DeckImageRepository";


export class DeleteDeckImageService {

    public path = 'deck/deck-images';

    async deleteDeckImage(id: number) {

        const image = await DeckImageRepository.findOneBy({ id: id });

        if (!image) {
            throw new ApiError(`Imagem informada não encontrada!`, 404);
        };

        const deletedImage = await DeckImageRepository.delete({ id: id });

        const deleteImageService = new DeleteImageService();

        const imagePath = `${this.path}/${image.name}`;
        await deleteImageService.deleteImage(imagePath);

        if (deletedImage.affected === 0) {
            throw new ApiError(`Imagem não encontrada!`, 404);
        };

        return deletedImage;
    };
};