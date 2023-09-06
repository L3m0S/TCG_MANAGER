import { AppDataSource } from "../../database/connection";
import { ArticleView } from "../../entities/ArticleView.entity";

export const ArticleViewRepository = AppDataSource.getRepository(ArticleView).extend({

});