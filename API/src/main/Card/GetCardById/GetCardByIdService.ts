import axios from "axios";
import { ApiError } from "../../../helpers/apiErrors";
import { CardApiConfig } from "../card-api-config/card-api-config";


export class GetCardByIdService {
    async getCardById(id: string) {
        if (!id) {
            throw new ApiError('ID não valido!', 403);
        }

        const apiConfig = new CardApiConfig().getConfig();

        let card;
        try {
            card = (await axios.get(
                `${apiConfig.url}/cards/${id}`
            )).data;
        } catch (err: any) {
            throw new ApiError(err.message, err.response?.status);
        };

        return card;
    }
}