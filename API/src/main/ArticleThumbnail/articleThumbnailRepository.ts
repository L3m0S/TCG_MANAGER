import { AppDataSource } from "../../database/connection";
import { ArticleThumbnail } from "../../entities/ArticleThumbnail.entity";

export const articleThumbnailRepository = AppDataSource.getRepository(ArticleThumbnail).extend({

});