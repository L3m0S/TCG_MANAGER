import { DeckImage } from "../../../entities/DeckImage.entity";
import { ApiError } from "../../../helpers/apiErrors";
import { UploadImageService } from "../../CloudStorage/UploadImage/UploadImageService";

export class UploadArticleImageService {
    public path = 'deck/deck-images';

    async uploadImage(file: any, articleId: number) {

        if (!articleId) {
            throw new ApiError('Informe o artigo vinculado a imagem!', 400);
        };

        const uploadImageService = new UploadImageService();
        const url = await uploadImageService.uploadImage(this.path, file);

        //adicionar getByIdArticle

        // const image = new DeckImage();
        // image.url = url;
        // image.deck = deck;

        // const deckImage = await DeckImageRepository.save(image);

        // return deckImage;
    };
};