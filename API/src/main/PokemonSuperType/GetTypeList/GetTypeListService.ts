import axios from "axios";
import { CardApiConfig } from "../../Card/card-api-config/card-api-config";
import { ApiError } from "../../../helpers/apiErrors";


export class GetSuperTypeListService {

    async getSuperTypeList() {
        const apiConfig = new CardApiConfig().getConfig();

        let superTypeList;
        try {
            superTypeList = (await axios.get(
                `${apiConfig.url}/supertypes?page=1&pageSize=20`
            )).data;
        } catch (err: any) {
            throw new ApiError(err.message, err.response?.status)
        }

        return superTypeList;
    }
}