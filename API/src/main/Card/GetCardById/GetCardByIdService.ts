import axios from "axios";
import { ApiError } from "../../../helpers/apiErrors";
import { CardApiConfig } from "../card-api-config/card-api-config";
import { ICard } from "../../../interfaces/Card.model";


export class GetCardByIdService {
    async getCardById(id: string): Promise<any> {
        if (!id) {
            throw new ApiError('ID não valido!', 403);
        }

        const apiConfig = new CardApiConfig().getConfig();

        let card: ICard;
        try {
            card = (await axios.get(
                `${apiConfig.url}/cards/${id}`
            )).data;
        } catch (err: any) {
            if (err?.response?.status === 404)
                throw new ApiError(`Carta com ID ${id} não encontrada!`, err.response?.status);
            throw new ApiError(err.message, err.response?.status);
        };

        return card;
    }
}