import { ApiError } from "../../../helpers/apiErrors";
import { GetUserByIdService } from "../../User/GetUserById/GetUserByIdService";
import { articlePublishRequestRepository } from "../articlePublishRequestRepository";


export class UpdateArticlePublishRequestService {

    async updatePublishRequest(publishRequestId: number, newStatus: string, requestUserId: number, message?: string) {

        if (!publishRequestId) {
            throw new ApiError(`Informe a solicitação de públicação!`, 400);
        };

        const publishRequestExists = await articlePublishRequestRepository.findOneBy({ id: publishRequestId });

        if (!publishRequestExists) {
            throw new ApiError(`Solicitação de publicação com ID informado não encontrada!`, 400);
        };

        if (publishRequestExists.status === 'REFUSED' || publishRequestExists.status === 'PUBLISHED') {
            throw new ApiError(`Não é possivel alterar uma solicitação já aceita ou recusada!`, 400);
        };

        if (!newStatus) { 
            throw new ApiError('Informe o novo status da solicitação de publicação!', 400);
        };

        if (newStatus !== 'PUBLISHED' && newStatus !== 'REFUSED') {
            throw new ApiError(`Só é possivel recusar ou aceitar uma solicitação de publicação!`, 400);
        };

        if (newStatus === 'REFUSED' && !message) {
            throw new ApiError(`Informe o motivo da recusa da solicitação de publicação!`, 400);
        };

        if (!requestUserId) {
            throw new ApiError(`Usuário não possui permissão para editar a solicitação!`, 400);
        };

        const getUserByIdService = new GetUserByIdService();

        const userExists = await getUserByIdService.getUserById(requestUserId);

        if (!userExists?.admin) {
            throw new ApiError(`Usuário não possui permissão para editar a solicitação!`, 400);
        };

        publishRequestExists.status = newStatus;
        publishRequestExists.action_user = userExists;
        publishRequestExists.message = message!;

        const updatedPublishRequest = await articlePublishRequestRepository.save(publishRequestExists);

        return updatedPublishRequest;
    };
};