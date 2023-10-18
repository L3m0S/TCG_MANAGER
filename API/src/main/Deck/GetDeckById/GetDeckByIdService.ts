import { Deck } from "../../../entities/Deck.entity";
import { ApiError } from "../../../helpers/apiErrors";
import { deckRepository } from "../DeckRepository";

export class GetDeckByIdService {

    async getDeckById(deckId: number): Promise<Deck | null> {

        if (!deckId) {
            throw new ApiError('Informe o deck vinculado a imagem!', 400);
        };

        const deck = await deckRepository.findOne({
            where: { id: deckId, deleted: false },
            relations: ['user']
        });

        return deck;
    };
};