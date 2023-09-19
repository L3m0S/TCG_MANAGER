import { AppDataSource } from "../../database/connection";
import { ArticlePublishRequest } from "../../entities/ArticlePublishRequest";

export const articlePublishRequestRepository = AppDataSource.getRepository(ArticlePublishRequest).extend({

});