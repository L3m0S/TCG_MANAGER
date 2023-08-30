import axios from "axios";
import { ApiError } from "../../../helpers/apiErrors";
import { CardApiConfig } from "../card-api-config/card-api-config";
import { ICard } from "../../../models/Card.model";

interface ICardReturn {
    count: number;
    data: ICard[]
    page: number;
    pageSize: number;
    totalCount: number
}
export class CardListService {

    async getCardList(page: number, pageSize: number, searchParams?: string, orderByParams?: string): Promise<ICardReturn> {
        const apiConfig = new CardApiConfig().getConfig();

        const filters = searchParams?.length! > 0 ? `&q=${searchParams}` : '';
        const orderBy = orderByParams?.length! > 0 ? `&orderBy=${orderByParams}` : '';
        const queryParams = `page=${page}&pageSize=${pageSize}${filters}${orderBy}`;

        console.log(`${apiConfig.url}/cards?${queryParams}`)
        let cardList;
        try {
            cardList = (await axios.get(
                `${apiConfig.url}/cards?${queryParams}`
            )).data;
        } catch (err: any) {
            throw new ApiError(err.message, err.response?.status)
        }

        return cardList;
    };
};