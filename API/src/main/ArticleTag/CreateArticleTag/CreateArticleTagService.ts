import { ArticleTag } from "../../../entities/ArticleTag.entity";
import { ApiError } from "../../../helpers/apiErrors";
import { GetArticleByIdService } from "../../Article/GetArticleByid/GetArticleByIdService";
import { GetTagListService } from "../../Tag/GetTagList/GetTagService";
import { articleTagRepository } from "../ArticleTagRepository";

export class CreateArticleTagService {

    async createArticleTag(articleTag: ArticleTag): Promise<ArticleTag> {

        if (!articleTag?.article?.id) {
            throw new ApiError(`Informe o artigo!`, 400);
        };

        if (!articleTag?.tag?.id) {
            throw new ApiError(`Informe o tag!`, 400);
        };

        const articleService = new GetArticleByIdService();

        const articleExists = await articleService.getArticleBydId(articleTag?.article?.id);

        if (!articleExists) {
            throw new ApiError(`Artigo com o ID(${articleTag?.article?.id}) informado não foi encontrado!`, 400);
        };

        const tagService = new GetTagListService();

        const tagExists = await tagService.getTagList({ id: articleTag?.tag?.id });

        if (!tagExists) {
            throw new ApiError(`Tag com o ID(${articleTag?.tag?.id}) informado não foi encontrada!`, 400);
        };

        const createdArticleTag = await articleTagRepository.save(articleTag);

        return createdArticleTag;
    };
};