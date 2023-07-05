import { Deck } from "../../../entities/Deck.entity";
import { ApiError } from "../../../helpers/apiErrors";
import { DeckListRepository } from "./DeckListRepository";

export class DeckListService {

    async getDeckList(page: number, pageSize: number) {

        const list = await DeckListRepository.findAndCount({
            skip: ((+page - 1) * +pageSize),
            take: +pageSize
        });

        const deckList = {
            data: list[0],
            page: page,
            pageSize: pageSize,
            count: list[0].length,
            totalCount: list[1]
        };

        return deckList;
    }
}