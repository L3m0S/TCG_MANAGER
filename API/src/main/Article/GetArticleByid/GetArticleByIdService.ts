import { Article } from "../../../entities/Article.entity";
import { ApiError } from "../../../helpers/apiErrors";
import { ArticleRepository } from "../ArticleRepository";

export class GetArticleByIdService {

    async getArticleBydId(id: number): Promise<Article> {

        if (!id) {
            throw new ApiError('Informe o id do artigo!', 400);
        };

        const article = await ArticleRepository.findOneBy({ id: id });

        if (!article) {
            throw new ApiError('Artigo com o id informado não foi encontrado!', 400);
        };

        return article;
    };
};