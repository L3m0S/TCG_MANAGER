import { ApiError } from "../../../helpers/apiErrors";
import { deckRepository } from "../DeckRepository";

export class GetDeckByIdService {

    async getDeckById(deckId: number) {

        if (!deckId) {
            throw new ApiError('Informe o deck vinculado a imagem!', 400);
        };

        const deck = await deckRepository.findOneBy({ id: deckId, deleted: false, user: true });

        return deck;
    };
};