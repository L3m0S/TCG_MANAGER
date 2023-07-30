import { AppDataSource } from "../../database/connection";
import { Article } from "../../entities/Article.entity";

export const ArticleRepository = AppDataSource.getRepository(Article).extend({

    async getArticleById(id: number): Promise<Article> {
        const article = await this.findOne({
            where: { id: id },
            relations: {
                images: true
            }
        });

        for (const image of article?.images!) {
            article?.content.replace(image.identifier, image.url);
        };

        return article!;
    }
});