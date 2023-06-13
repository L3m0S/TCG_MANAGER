import { AppDataSource } from "../../../database/conection";
import { DeckCard } from "../../../entities/DeckCard.entity";

export const CreateDeckCardRepository = AppDataSource.getRepository(DeckCard).extend({

});