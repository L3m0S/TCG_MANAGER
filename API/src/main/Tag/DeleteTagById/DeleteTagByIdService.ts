import { ApiError } from "../../../helpers/apiErrors";
import { GetTagListService } from "../GetTagList/GetTagService";
import { tagRepository } from "../TagRepository";

export class DeleteTagByIdService {

    async deleteTagById(tagId: number) {

        if (!tagId) {
            throw new ApiError(`Informe o id da tag a ser deletada!`, 400);
        };

        const tagService = new GetTagListService();

        const tagExists = await tagService.getTagList({ id: tagId });

        if (tagExists?.data?.length === 0) {
            throw new ApiError(`Tag com o id(${tagId}) não encontrada!!`, 400);
        };

        const deletedTag = await tagRepository.delete({ id: tagId });

        return deletedTag;
    };
};