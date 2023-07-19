import { ArticleListRepository } from "./ArticleListRepository";;

export class ArticleListService {

    async getArticleList(page: number, pageSize: number, searchParams: Object) {

        // const params: { [k: string]: any } = {};

        // for (const [key, value] of Object.entries(searchParams)) {
        //     if (key !== 'pageSize' && key !== 'page') {
        //         params[key] = value;
        //     };
        // };
        // console.log({where: {
        //     ...params
        // }})
        const list = await ArticleListRepository.findAndCount({
            skip: ((+page - 1) * +pageSize),
            take: +pageSize
        });

        const articleList = {
            data: list[0],
            page: page,
            pageSize: pageSize,
            count: list[0].length,
            totalCount: list[1]
        };

        return articleList;
    }
}