import { AppDataSource } from "../../database/connection";
import { ArticleImage } from "../../entities/ArticleImage.entity";

export const articleImageRepository = AppDataSource.getRepository(ArticleImage).extend({

});