import { Deck } from "../../../entities/Deck.entity";
import { ApiError } from "../../../helpers/apiErrors";
import { GetUserByIdService } from "../../User/GetUserById/GetUserByIdService";
import { CreateDeckService } from "../CreateDeck/CreateDeckService";
import { GetDeckByIdService } from "../GetDeckById/GetDeckByIdService";

export class UpdateDeckService {

    async updateDeck(deck: Deck, userRequestId: number): Promise<Deck> {

        if (!userRequestId) {
            throw new ApiError(`Não autorizado!`, 401);
        };

        if (!deck?.id) {
            throw new ApiError('Informe o ID do deck a ser editado!', 400);
        };

        const getDeckService = new GetDeckByIdService();

        const deckExists = await getDeckService.getDeckById(+deck.id);

        if (!deckExists) {
            throw new ApiError(`Deck com o ID informado não foi encontrado!`, 404);
        };

        const getUserService = new GetUserByIdService();

        const userExists = await getUserService.getUserById(+userRequestId);

        if (!userExists) {
            throw new ApiError(`Não autenticado!`, 404);
        };

        if (+deckExists?.user?.id !== +userRequestId) {
            throw new ApiError(`Não é possivel editar artigos de outros usúarios!`, 401);
        };

        // if ((deck?.user?.id) && (deckExists?.user?.id !== deck?.user?.id)) {
        //     throw new ApiError(`Não é permitido alterar o usúario criador do artigo!`, 400);
        // };

        const createDeckService = new CreateDeckService();

        deck.cards = [];
        deck.deck_image;
        deck.user = deckExists.user;
        deck.id = +deck.id;
        const updatedDeck = await createDeckService.createDeck(deck);

        return updatedDeck;
    };
};