import { ArticleComment } from "../../../entities/ArticleComment.entity";
import { User } from "../../../entities/User.entity";
import { ApiError } from "../../../helpers/apiErrors";
import { GetArticleByIdService } from "../../Article/GetArticleByid/GetArticleByIdService";
import { articleCommentRepository } from "../articleCommentRepository";

export class CreateArticleCommentService {

    async createArticleComment(comment: ArticleComment, requestUserId: number): Promise<ArticleComment> {

        if (!comment) {
            throw new ApiError(`Erro ao salvar comentário!`, 400);
        };

        if (!comment?.article?.id) {
            throw new ApiError(`Informe o artigo relacionado ao comentário!`, 400);
        };

        if (!comment?.content || comment?.content.length === 0) {
            throw new ApiError(`Preencha o comentário!`, 400);
        };

        const getArticleService = new GetArticleByIdService();

        const articleExists = await getArticleService.getArticleBydId(+comment?.article?.id)

        if (!articleExists) {
            throw new ApiError(`Artigo com ID informado no comentário não encontrado!`, 400);
        };

        if (comment?.relation_comment?.id) {
            const relationCommentExists = await articleCommentRepository.findOneBy({ id: comment.relation_comment.id, deleted: false });

            if (! relationCommentExists) {
                throw new ApiError(`Comentário relacionado não encontrado!`, 400);
            };
        };

        comment.user = new User();
        comment.user.id = requestUserId;

        const createdComment = await articleCommentRepository.save(comment);

        return createdComment;
    };
};