import { ApiError } from "../../../helpers/apiErrors";
import { GetUserByIdService } from "../../User/GetUserById/GetUserByIdService";
import { ArticleListService } from "../ArcticleList/ArticleListService";
import { ArticleRepository } from "../ArticleRepository";

export class DeleteArticleService {

    async deleteArticle(articleId: number, requestUser: number) {

        if (!articleId) {
            throw new ApiError(`Informe o ID do artigo a ser deletado!`, 400);
        };

        if (!requestUser) {
            throw new ApiError(`Não autorizado!`, 401);
        };

        const getArticleService = new ArticleListService();

        const articleExists = (await getArticleService.getArticleList({ id: +articleId, relations: 'user', page: 1, pageSize: 1 })).data[0];

        if (!articleExists) {
            throw new ApiError(`Artigo com o ID ${articleId} não encontrado!`, 404);
        };

        const getUserByIdService = new GetUserByIdService();

        const requestUseExists = await getUserByIdService.getUserById(requestUser);

        if (articleExists?.user?.id !== +requestUser && !requestUseExists.admin) {
            throw new ApiError(`Não é permitido excluir artigos de outros usuários!`, 401);
        };

        articleExists.deleted = true;
        const deletedArticle = await ArticleRepository.update(articleId, articleExists);

        return deletedArticle;
    };
};