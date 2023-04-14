import axios from "axios";
import { ApiError } from "../../../helpers/apiErrors";
import { CardApiConfig } from "../card-api-config/card-api-config";
import { ICard } from "../../../models/Card.model";

export class RandomCardService {

    async getRandomCard(): Promise<ICard> {

        const apiConfig = new CardApiConfig().getConfig();

        const randomPage = Math.floor(Math.random() * 320);
        const randomCardIndex = Math.floor(Math.random() * 49);

        let cardList;
        let randomCard: ICard;

        try {
            cardList = (await axios.get(
                `${apiConfig.url}/cards?page=${randomPage}&pageSize=50`,
            )).data;
            randomCard = cardList.data[randomCardIndex];
        } catch (err: any) {
            throw new ApiError(err.message, err.response?.status);
        }

        return randomCard;
    }
}