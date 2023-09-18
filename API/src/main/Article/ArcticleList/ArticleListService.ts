
import { GetEntityList } from "../../../helpers/getEntityList";
import { tagRepository } from "../../Tag/TagRepository";
import { ArticleRepository } from "../ArticleRepository";

export class ArticleListService {

    async getArticleList(params: { [key: string]: any }) {

        const getEntityList = new GetEntityList(ArticleRepository);
        
        const list = await getEntityList.getEntityList(params);

        const aticleList = {
            data: list[0],
            page: params?.['page'] ?? 1,
            pageSize: params?.['pageSize'] ?? 20,
            count: list[0].length,
            totalCount: list[1]
        };

        return aticleList;
    }
}