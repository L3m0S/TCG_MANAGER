import { GetEntityList } from "../../../helpers/getEntityList";
import { articleCommentRepository } from "../articleCommentRepository";


export class GetArticleCommentListService {

    async getCommentList(params: { [key: string]: any }) {

        const getEntityList = new GetEntityList(articleCommentRepository);

        const list = await getEntityList.getEntityList(params);

        const commentList = {
            data: list[0],
            page: params?.['page'] ?? 1,
            pageSize: params?.['pageSize'] ?? 20,
            count: list[0].length,
            totalCount: list[1]
        };

        return commentList;
    };
};