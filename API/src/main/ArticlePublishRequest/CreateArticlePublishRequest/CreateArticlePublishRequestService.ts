import { ArticlePublishRequest } from "../../../entities/ArticlePublishRequest";
import { ApiError } from "../../../helpers/apiErrors";
import { GetArticleByIdService } from "../../Article/GetArticleByid/GetArticleByIdService";
import { articlePublishRequestRepository } from "../articlePublishRequestRepository";

export class CreateArticlePublishRequestService {

    async createArticlePublishRequest(publishRequest: ArticlePublishRequest) {

        if (publishRequest?.id) {
            throw new ApiError(`Erro ao tentar salvar o pedido de publicação!`, 400);
        };

        if (!publishRequest?.article?.id) {
            throw new ApiError(`Informe o artigo vinculado a solicitação!`, 400);
        };

        const articleService = new GetArticleByIdService();

        const articleExists = await articleService.getArticleBydId(publishRequest?.article?.id);

        if (!articleExists) {
            throw new ApiError(`Artigo com ID(${publishRequest?.article?.id}) não encontrado!`, 404);
        };

        const pedingRequestExists = await articlePublishRequestRepository.createQueryBuilder()
            .where(`(status = 'PENDING' or status = 'PUBLISHED') `)
            .andWhere(`article_id = ${publishRequest?.article?.id}`)
            .getOne();

        if (pedingRequestExists) {
            throw new ApiError(`Já existe um pedido de publicação pendente/aceito para esse artigo!`, 400);
        };

        publishRequest.status = 'PENDING';

        if (publishRequest?.status !== 'PENDING') {
            throw new ApiError(`Não é possivel criar pedidos de publicação com status inicial diferente de pendente!`, 400);
        };

        publishRequest.message = '';

        const createdPublishRequest = await articlePublishRequestRepository.save(publishRequest);

        return createdPublishRequest;
    };
};