import { AppDataSource } from "../../../database/connection";
import { Deck } from "../../../entities/Deck.entity";

export const CreateDeckRepository = AppDataSource.getRepository(Deck).extend({

});