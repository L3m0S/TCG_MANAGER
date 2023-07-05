import { AppDataSource } from "../../../database/connection";
import { DeckCard } from "../../../entities/DeckCard.entity";

export const CreateDeckCardRepository = AppDataSource.getRepository(DeckCard).extend({

});