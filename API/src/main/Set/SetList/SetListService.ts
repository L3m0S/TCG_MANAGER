import axios from "axios";
import { CardApiConfig } from "../../Card/card-api-config/card-api-config";
import { ApiError } from "../../../helpers/apiErrors";
import { ISet } from "../../../interfaces/Set.model";


export class SetListService {

    async getSetList(page: number, pageSize: number, searchParams: string, orderByParams: string): Promise<ISet[]> {

        const apiConfig = new CardApiConfig().getConfig();

        const filters = searchParams.length > 0 ? `&q=${searchParams}` : '';
        const orderBy = orderByParams.length > 0 ? `&orderBy=${orderByParams}` : '';
        const queryParams = `page=${page}&pageSize=${pageSize}${filters}${orderBy}`;

        let setList: ISet[];
        try {
            setList = (await axios.get(
                `${apiConfig.url}/sets?${queryParams}`
            )).data;
        } catch (err: any) {
            throw new ApiError(err.message, err.response?.status);
        };

        return setList;
    }
}