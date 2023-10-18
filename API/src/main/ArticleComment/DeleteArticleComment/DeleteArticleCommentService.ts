import { ApiError } from "../../../helpers/apiErrors";
import { articleCommentRepository } from "../articleCommentRepository";


export class DeleteArticleCommentService {

    async deleteComment(commentId: number) {

        if (!commentId) {
            throw new ApiError(`Informe o id do comentário a ser excluído!`, 400);
        };

        const commentExists = await articleCommentRepository.findOneBy({ id: commentId });

        if (!commentExists) {
            throw new ApiError('Comentário não encontrado!', 400);
        };

        commentExists.deleted = true;

        const deletedComment = await articleCommentRepository.save(commentExists);

        return deletedComment;
    };
};