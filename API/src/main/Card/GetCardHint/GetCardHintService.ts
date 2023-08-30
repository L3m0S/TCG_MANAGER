import { GetCardHintFromGPTService } from "../../ChatGpt/GetCardHint/GetCardHintFromGPTService";

export class GetCardHintService {

    async getCardHint(cardName: string) {

        const getCardHintFromGPTService =  new GetCardHintFromGPTService();

        const hint = await getCardHintFromGPTService.getCardHint(cardName);

        return hint;
    };
};