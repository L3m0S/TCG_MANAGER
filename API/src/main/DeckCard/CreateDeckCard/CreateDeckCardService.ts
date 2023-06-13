import { DeckCard } from "../../../entities/DeckCard.entity";
import { ApiError } from "../../../helpers/apiErrors";
import { CreateDeckCardRepository } from "./CreateDeckRepository";


export class CreateDeckCardService {
    
    async createDeckCardService(deckCard: DeckCard) {
        if (!deckCard.card_id) {
            throw new ApiError(`Informe o ID da carta!`, 400);
        }

        if (!deckCard?.deck?.id) {
            throw new ApiError(`Informe o deck da carta!`, 400)
        }

        const createdDeckCard = await CreateDeckCardRepository.save(deckCard);

        return createdDeckCard;
    }
}