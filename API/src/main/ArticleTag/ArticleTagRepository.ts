import { AppDataSource } from "../../database/connection";
import { ArticleTag } from "../../entities/ArticleTag.entity";

export const articleTagRepository = AppDataSource.getRepository(ArticleTag).extend({

});