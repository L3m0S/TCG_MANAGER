import { AppDataSource } from "../../database/connection";
import { Deck } from "../../entities/Deck.entity";

export const deckRepository = AppDataSource.getRepository(Deck).extend({

});