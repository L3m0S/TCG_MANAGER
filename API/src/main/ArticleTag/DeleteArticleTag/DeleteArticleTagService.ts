import { DeleteResult } from "typeorm";
import { ApiError } from "../../../helpers/apiErrors";
import { articleTagRepository } from "../ArticleTagRepository";


export class DeleteArticleTagService {

    async deleteArticleTag(articleTagId: number): Promise<DeleteResult> {

        if (!articleTagId) {
            throw new ApiError(`Informe o ID da tag a ser deletada!`, 400);
        };

        const articleTagExists = await articleTagRepository.findOneBy({ id: articleTagId });

        if (!articleTagExists) {
            throw new ApiError(`Tag com o ID(${articleTagId}) não encontrada!`, 400);
        };

        const deletedArticleTag = await articleTagRepository.delete({ id: articleTagId });

        return deletedArticleTag;
    };
};