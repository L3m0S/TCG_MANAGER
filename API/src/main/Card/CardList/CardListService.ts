import axios from "axios";
import { ApiError } from "../../../helpers/apiErrors";
import { CardApiConfig } from "../card-api-config/card-api-config";

export class CardListService {
    
   async getCardList(page: number, pageSize: number) {
    const apiConfig = new CardApiConfig().getConfig();

    let cardList;
    try {
        cardList = (await axios.get(
            `${apiConfig.url}/cards?page${page}&pageSize=${pageSize}`
        )).data;
    } catch (err: any) {
        throw new ApiError(err.message, err.response?.status)
    }
    
    return cardList;
   }
}