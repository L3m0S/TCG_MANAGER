import axios from "axios";
import { ApiError } from "../../../helpers/apiErrors";
import { ISet } from "../../../models/Set.model";
import { CardApiConfig } from "../../Card/card-api-config/card-api-config";
import { IPokemonApiError } from "../../../models/PokemonApiError.model";


export class GetSetByIdService {

    async GetSetById(setId: string): Promise<ISet> {

        if (!setId) {
            throw new ApiError('ID não valido!', 403);
        }

        const apiConfig = new CardApiConfig().getConfig();

        let set: ISet;
        try {
            set = (await axios.get(
                `${apiConfig.url}/sets/${setId}`
            )).data;
        } catch (err: any) {
            throw new ApiError(err.message, err.response?.status);
        };

        return set;
    };
};