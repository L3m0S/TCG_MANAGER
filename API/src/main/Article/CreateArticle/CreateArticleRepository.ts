import { AppDataSource } from "../../../database/connection";
import { Article } from "../../../entities/Article.entity";

export const CreateArticleRepository = AppDataSource.getRepository(Article).extend({

});