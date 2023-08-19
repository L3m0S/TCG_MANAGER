import { AppDataSource } from "../../database/connection";
import { Tag } from "../../entities/Tag.entity";

export const tagRepository = AppDataSource.getRepository(Tag).extend({

});