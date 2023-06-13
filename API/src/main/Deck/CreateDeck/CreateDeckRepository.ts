import { AppDataSource } from "../../../database/conection";
import { Deck } from "../../../entities/Deck.entity";

export const CreateDeckRepository = AppDataSource.getRepository(Deck).extend({

});