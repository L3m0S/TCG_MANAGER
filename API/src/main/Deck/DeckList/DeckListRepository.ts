import { AppDataSource } from "../../../database/connection";
import { Deck } from "../../../entities/Deck.entity";

export const DeckListRepository = AppDataSource.getRepository(Deck).extend({

});