import { ApiError } from "../../../helpers/apiErrors";
import { GetUserByIdService } from "../../User/GetUserById/GetUserByIdService";
import { deckRepository } from "../DeckRepository";
import { GetDeckByIdService } from "../GetDeckById/GetDeckByIdService";

export class DeleteDeckService {

    async deleteDeck(deckId: number, requestUserId: number) {

        if (!deckId) {
            throw new ApiError(`Informe o deck que deseja excluir!`, 400);
        };

        if (!requestUserId) {
            throw new ApiError(`Não autorizado!`, 400);
        };

        const getDeckByIdService = new GetDeckByIdService();

        const deckExists = await getDeckByIdService.getDeckById(deckId);

        if (!deckExists) {
            throw new ApiError(`Deck informado não foi encontrado!`, 400);
        };

        const getUserByIdService = new GetUserByIdService();

        const userRequestExists = await getUserByIdService.getUserById(requestUserId);

        if (!userRequestExists) {
            throw new ApiError(`Não autorizado!`, 400);
        };

        if (+userRequestExists?.id !== deckExists?.user?.id && !userRequestExists.admin) {
            throw new ApiError(`Não é permitido excluir artigos de outros usuários!`, 401);
        };

        deckExists.deleted = true;

        const deletedDeck = deckRepository.save(deckExists);

        return deletedDeck;
    };
};