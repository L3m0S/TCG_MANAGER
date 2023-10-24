import { ApiError } from "../../../helpers/apiErrors";
import { GetCardHintFromGPTService } from "../../ChatGpt/GetCardHint/GetCardHintFromGPTService";
import { CardListService } from "../CardList/CardListService";
import { GetCardByIdService } from "../GetCardById/GetCardByIdService";

export class GetCardHintService {

    async getCardHint(cardId: string) {

        const getCardByIdService = new GetCardByIdService();

        const cardExists = await getCardByIdService.getCardById(cardId);

        if (!cardExists) {
            throw new ApiError(`Casta com o ID ${cardId} não encontrada!`, 400);
        };

        const getCardHintFromGPTService =  new GetCardHintFromGPTService();

        const hint = await getCardHintFromGPTService.getCardHint(cardExists);

        return hint;
    };
};