import { AppDataSource } from "../../../database/connection";
import { Article } from "../../../entities/Article.entity";

export const ArticleListRepository = AppDataSource.getRepository(Article).extend({

});