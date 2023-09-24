import { ApiError } from "../../../helpers/apiErrors";
import { GetUserByIdService } from "../../User/GetUserById/GetUserByIdService";
import { deckCardRepository } from "../deckCardRepository";


export class DeleteDeckCardService {

    async deleteDeckCard(deckCardId: number, requestUserId: number) {

        if (!deckCardId) {
            throw new ApiError(`Informe a carta que deseja excluir!`, 400);
        };

        const deckCardExists = await deckCardRepository.findOne({
            where: { id: deckCardId},
            relations: ['deck.user']
        });

        if (!deckCardExists) {
            throw new ApiError(`Carta do deck não encontrada!`, 400);
        };

        const getUserByIdService = new GetUserByIdService();
        const requestUserExists = await getUserByIdService.getUserById(requestUserId);

        if (!requestUserExists || (requestUserExists?.id !== deckCardExists?.deck?.user?.id && !requestUserExists.admin)) {
            throw new ApiError(`Usuário não autorizado!`, 400);
        };

        const deletedDeckCard = await deckCardRepository.delete({ id: deckCardExists.id });

        return deletedDeckCard;
    };
};