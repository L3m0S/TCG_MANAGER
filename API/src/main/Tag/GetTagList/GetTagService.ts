import { GetEntityList } from "../../../helpers/getEntityList";
import { tagRepository } from "../TagRepository";

export class GetTagListService {

    async getTagList(params: { [key: string]: any }) {

        const getEntityList = new GetEntityList(tagRepository);

        const list = await getEntityList.getEntityList(params);

        const tagList = {
            data: list[0],
            page: params?.['page'] ?? 1,
            pageSize: params?.['pageSize'] ?? 20,
            count: list[0].length,
            totalCount: list[1]
        };

        return tagList;
    };
};