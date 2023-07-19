import { Article } from "../../../entities/Article.entity";
import { ApiError } from "../../../helpers/apiErrors";
import { GetUserByIdService } from "../../User/GetUserById/GetUserByIdService";
import { CreateArticleRepository } from "./CreateArticleRepository";

export class CreateArticleService {

    async createArticle(article: Article) {

        if (article?.content?.length === 0) {
            throw new ApiError(`Preencha o conteúdo do artigo!`, 400);
        };

        if (!article?.user) {
            throw new ApiError(`Informe o usúario criador do artigo!`, 400);
        };

        const getUserByIdService = new GetUserByIdService();

        const userExists = await getUserByIdService.getUserById(+article?.user?.id);

        if (!userExists) {
            throw new ApiError(`Usuário criador do artigo não encontrado!`, 400);
        };

        const createdArticle = await CreateArticleRepository.save(article);

        return createdArticle;
    }
}