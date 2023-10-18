import { Deck } from "../../../entities/Deck.entity";
import { ApiError } from "../../../helpers/apiErrors";
import { CreateDeckCardService } from "../../DeckCard/CreateDeckCard/CreateDeckCardService";
import { GetUserByIdService } from "../../User/GetUserById/GetUserByIdService";
import { CreateDeckRepository } from "./CreateDeckRepository";


export class CreateDeckService {

    async createDeck(deck: Deck) {

        if (!deck?.name) {
            throw new ApiError(`Informe o nome do deck!`, 400);
        };

        if (!deck?.difficulty) {
            throw new ApiError(`Informe a dificuldade do deck!`, 400);
        };

        if (!deck?.user?.id) {
            throw new ApiError(`Informe o usúario criador do deck!`, 400);
        };

        const getUserByIdService = new GetUserByIdService();

        const userExists = await getUserByIdService.getUserById(+deck?.user?.id);

        if (!userExists) {
            throw new ApiError(`Usuário informado não encontrado!`, 400)
        }

        // if (!deck?.cards?.length || deck?.cards?.length === 0) {
        //     throw new ApiError(`O deck deve possuir ao minimo uma carta!`, 400)
        // }

        const createdDeck = await CreateDeckRepository.save(deck);

        const createDeckCardService = new CreateDeckCardService();

        const cards = [];
        if (deck?.cards?.length > 0) {
            for (const card of deck.cards) {
                card.deck = new Deck();
                card.deck.id = createdDeck.id;
                const deckCard = await createDeckCardService.createDeckCardService(card);
                cards.push(deckCard);
            };
        };

        createdDeck.cards = cards;
        return createdDeck;
    };
};