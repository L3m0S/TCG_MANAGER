import { GetEntityList } from "../../../helpers/getEntityList";
import { DeckListRepository } from "./DeckListRepository";

export class DeckListService {

    async getDeckList(params: { [key: string]: any }) {

        const getEntityList = new GetEntityList(DeckListRepository);

        const list = await getEntityList.getEntityList(params);

        const deckList = {
            data: list[0],
            page: params?.['page'] ?? 1,
            pageSize: params?.['pageSize'] ?? 20,
            count: list[0].length,
            totalCount: list[1]
        };

        return deckList;
    };
};