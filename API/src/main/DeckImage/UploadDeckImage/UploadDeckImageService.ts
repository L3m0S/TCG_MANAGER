import { DeckImage } from "../../../entities/DeckImage.entity";
import { ApiError } from "../../../helpers/apiErrors";
import { UploadImageService } from "../../CloudStorage/UploadImage/UploadImageService";
import { GetDeckByIdService } from "../../Deck/GetDeckById/GetDeckByIdService";
import { DeckImageRepository } from "../DeckImageRepository";


export class UploadDeckImageService {
    public path = 'deck/deck-images';

    async uploadImage(file: any, deckId: number, cardId?: string) {

        if (!deckId) {
            throw new ApiError('Informe o deck vinculado a imagem!', 400);
        };

        const getDeckByIdService = new GetDeckByIdService();
        const deck = await getDeckByIdService.getDeckById(deckId);

        if (!deck) {
            throw new ApiError('Deck informado não encontrado!', 404);
        };

        const deckImageExists = await DeckImageRepository.findOneBy({ deck: { id: deckId } });

        if (deckImageExists)
            throw new ApiError(`Deck já possui uma cover!`, 400);

        const image = new DeckImage();
        if (cardId) {
            image.deck = deck;
            image.card_id = cardId;
        } else {
            const uploadImageService = new UploadImageService();
            const uploadedImage = await uploadImageService.uploadImage(this.path, file);
            image.url = uploadedImage.url;
            image.deck = deck;
            image.name = uploadedImage?.fileName;
            image.original_name = file?.originalName;
        };

        const deckImage = await DeckImageRepository.save(image);

        return deckImage;
    };
};