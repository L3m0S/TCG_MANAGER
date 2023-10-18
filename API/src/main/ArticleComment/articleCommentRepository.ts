import { AppDataSource } from "../../database/connection";
import { ArticleComment } from "../../entities/ArticleComment.entity";

export const articleCommentRepository = AppDataSource.getRepository(ArticleComment).extend({

});