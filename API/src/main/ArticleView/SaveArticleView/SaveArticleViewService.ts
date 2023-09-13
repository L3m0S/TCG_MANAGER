import { ArticleView } from "../../../entities/ArticleView.entity";
import { ApiError } from "../../../helpers/apiErrors";
import { ArticleViewProducer } from "../../../queues/articleViews/Producer/ArticleViewProducer";
import { IProducer } from "../../../queues/interfaces/IProducer";
import { GetArticleByIdService } from "../../Article/GetArticleByid/GetArticleByIdService";
import { GetUserByIdService } from "../../User/GetUserById/GetUserByIdService";

export class SaveArticleViewService {

    private _producer: IProducer;
    
    constructor (producer: IProducer) {
        this._producer = producer;
    };

    async saveArticleView(articleId: number, userId: number) {

        if (!articleId) {
            throw new ApiError(`Informe o ID do artigo!`, 400);
        };

        const getArticleByIdService = new GetArticleByIdService();

        const articleExists = await getArticleByIdService.getArticleBydId(articleId);

        if (!articleExists) {
            throw new ApiError(`Artigo com o ID informado não encontrado!`, 404);
        };

        if (!userId) {
            throw new ApiError(`Informe o ID do usuário!`, 400);
        };

        const getUserByIdService = new GetUserByIdService();

        const userExists = await getUserByIdService.getUserById(userId);

        const articleView = new ArticleView();

        articleView.article = articleExists;
        articleView.user = userExists;

        this._producer.produceMessage(JSON.stringify(articleView));

        return;
    };
};