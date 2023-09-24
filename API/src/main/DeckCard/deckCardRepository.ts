import { AppDataSource } from "../../database/connection";
import { DeckCard } from "../../entities/DeckCard.entity";

export const deckCardRepository = AppDataSource.getRepository(DeckCard).extend({

});