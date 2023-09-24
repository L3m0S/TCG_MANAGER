import axios from "axios";
import { ApiError } from "../../../helpers/apiErrors";
import { CardApiConfig } from "../card-api-config/card-api-config";
import { ICard } from "../../../interfaces/Card.model";

export class RandomCardService {

    async getRandomCard(): Promise<ICard> {

        const apiConfig = new CardApiConfig().getConfig();

        const randomPage = Math.floor(Math.random() * 800);
        const randomCardIndex = Math.floor(Math.random() * 19);

        let cardList;
        let randomCard: ICard;

        try {
            cardList = (await axios.get(
                `${apiConfig.url}/cards?page=${randomPage}&pageSize=20`,
            )).data;
            randomCard = cardList.data[randomCardIndex];
        } catch (err: any) {
            throw new ApiError(err.message, err.response?.status);
        };

        return randomCard;
    }
}