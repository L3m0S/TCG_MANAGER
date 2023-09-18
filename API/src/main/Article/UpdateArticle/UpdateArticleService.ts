import { Article } from "../../../entities/Article.entity";
import { ApiError } from "../../../helpers/apiErrors";
import { ArticleListService } from "../ArcticleList/ArticleListService";
import { CreateArticleService } from "../CreateArticle/CreateArticleService";


export class UpdateArticleService {

    async updateArticle(article: Article, requestUser: number): Promise<Article> {

        if (!+requestUser) {
            throw new ApiError(`Não autorizado!`, 401);
        };

        const getArticleService = new ArticleListService();

        if(!article?.id) {
            throw new ApiError(`Informe o ID do artigo a ser editado!`, 400);
        };

        const articleExists = (await getArticleService.getArticleList({ id: article?.id, relations: 'user', page: 1, pageSize: 1 })).data[0];

        if (!articleExists) {
            throw new ApiError(`Artigo com o ID${article.id} não encontrado!`, 404);
        };

        if (articleExists?.user?.id !== +requestUser) {
            throw new ApiError(`Não é possivel editar artigos de outros usúarios!`, 401);
        };

        if (!article?.user) {
            article.user = articleExists.user;
        };

        if (article?.user?.id !== articleExists?.user?.id) {
            throw new ApiError(`Não é permitido alterar o usúario criado do artigo!`, 400);
        };

        const saveArticleService = new CreateArticleService();

        const updatedArticle = await saveArticleService.createArticle(article);

        return updatedArticle;
    };
};