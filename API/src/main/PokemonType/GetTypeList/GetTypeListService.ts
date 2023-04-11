import axios from "axios";
import { CardApiConfig } from "../../Card/card-api-config/card-api-config";
import { ApiError } from "../../../helpers/apiErrors";


export class GetTypeListService {

    async getTypeList() {
        const apiConfig = new CardApiConfig().getConfig();

        let typeList;
        try {
            typeList = (await axios.get(
                `${apiConfig.url}/types?page=1&pageSize=20`
            )).data;
        } catch (err: any) {
            throw new ApiError(err.message, err.response?.status)
        }

        return typeList;
    }
}