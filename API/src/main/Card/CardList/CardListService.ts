import axios from "axios";
import { ApiError } from "../../../helpers/apiErrors";
import { CardApiConfig } from "../card-api-config/card-api-config";

export class CardListService {
    
   async getCardList(page: number, pageSize: number, searchParams: string) {
    const apiConfig = new CardApiConfig().getConfig();

    const filters = searchParams.length > 0 ? `q=${searchParams}` : '';
    const queryParams = `?page${page}&pageSize=${pageSize}${filters}`;

    let cardList;
    try {
        cardList = (await axios.get(
            `${apiConfig.url}/cards?${queryParams}`
        )).data;
    } catch (err: any) {
        throw new ApiError(err.message, err.response?.status)
    }
    
    return cardList;
   }
}