import axios from "axios";
import { CardApiConfig } from "../../../Card/card-api-config/card-api-config";
import { ApiError } from "../../../../helpers/apiErrors";

export class GetSubTypeListService {

    async getSubTypeList() {
        const apiConfig = new CardApiConfig().getConfig();

        let subTypeList;
        try {
            subTypeList = (await axios.get(
                `${apiConfig.url}/subtypes?page=1&pageSize=20`
            )).data;
        } catch (err: any) {
            throw new ApiError(err.message, err.response?.status)
        }

        return subTypeList;
    }
}