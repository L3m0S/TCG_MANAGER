import { AppDataSource } from "../../database/connection";
import { Article } from "../../entities/Article.entity";
import { ArticleComment } from "../../entities/ArticleComment.entity";
import { User } from "../../entities/User.entity";

export const ArticleRepository = AppDataSource.getRepository(Article).extend({

    // async getArticleById(id: number): Promise<Article> {
    //     const article = await this.findOne({
    //         where: { id: id },
    //         relations: {
    //             images: true
    //         }
    //     });

    //     for (const image of article?.images!) {
    //         article?.content.replace(image.identifier, image.url);
    //     };

    //     return article!;
    // }

    async getArticleById(id: number) {

        const article = this.createQueryBuilder('a')
        .addSelect('ac.*')
        .addSelect('au.*')
        .innerJoin(ArticleComment, 'ac', 'ac.article_id = a.id')
        .innerJoin(User, 'au', 'au.id = a.user_id')
        .where(`a.id = ${id}`)
        .getOne();

        return article;
    }
});