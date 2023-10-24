import { ArticleViewRepository } from "../ArticleViewRepository";
import { ApiError } from "../../../helpers/apiErrors";


export class GetArticleViewService {

    async getArticleViews(articleId: number) {

        if (!articleId) {
            throw new ApiError(`Informe o ID do artigo!`, 400);
        };

        const viewsNumber = ArticleViewRepository.count({ where: { id: articleId } });

        return viewsNumber;
    };
};