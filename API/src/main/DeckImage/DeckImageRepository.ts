import { AppDataSource } from "../../database/connection";
import { DeckImage } from "../../entities/DeckImage.entity";

export const DeckImageRepository = AppDataSource.getRepository(DeckImage).extend({

});