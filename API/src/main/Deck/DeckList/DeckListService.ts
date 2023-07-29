import { QueryParamsConverter } from "../../../helpers/queryParamsConverter";
import { DeckListRepository } from "./DeckListRepository";

export class DeckListService {

    async getDeckList(params: { [key: string]: any }) {

        const queryParamsConverter = new QueryParamsConverter(DeckListRepository);

        const list = await queryParamsConverter.paramsConverter(params);

        const deckList = {
            data: list[0],
            page: params?.['page'] ?? 1,
            pageSize: params?.['pageSize'] ?? 20,
            count: list[0].length,
            totalCount: list[1]
        };

        return deckList;
    }
}