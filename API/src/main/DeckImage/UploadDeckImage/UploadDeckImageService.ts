import { DeckImage } from "../../../entities/DeckImage.entity";
import { ApiError } from "../../../helpers/apiErrors";
import { UploadImageService } from "../../CloudStorage/UploadImage/UploadImageService";
import { GetDeckByIdService } from "../../Deck/GetDeckById/GetDeckByIdService";
import { DeckImageRepository } from "../DeckImageRepository";



export class UploadDeckImageService {
    public path = 'deck/deck-images';

    async uploadImage(file: any, deckId: number) {

        if (!deckId) {
            throw new ApiError('Informe o deck vinculado a imagem!', 400);
        };

        const uploadImageService = new UploadImageService();
        const url = await uploadImageService.uploadImage(this.path, file);

        const getDeckByIdService = new GetDeckByIdService();
        const deck = await getDeckByIdService.getDeckById(deckId);

        if (!deck) {
            throw new ApiError('Deck informado não encontrado!', 400);
        };

        const image = new DeckImage();
        image.url = url;
        image.deck = deck;

        const deckImage = await DeckImageRepository.save(image);

        return deckImage;
    };
};