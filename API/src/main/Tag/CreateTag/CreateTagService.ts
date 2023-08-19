import { Tag } from "../../../entities/Tag.entity";
import { ApiError } from "../../../helpers/apiErrors";
import { GetUserByIdService } from "../../User/GetUserById/GetUserByIdService";
import { tagRepository } from "../TagRepository";

export class CreateTagService {

    async createTag(tag: Tag) {
        console.log(tag)
        if (!tag) {
            throw new ApiError(`Informe as informações da tag!`, 400);
        };

        if (!tag?.name) {
            throw new ApiError(`Informe o nome da tag!`, 400);
        };

        if (!tag?.user?.id) {
            throw new ApiError(`Informe o usuário criador da tag!`, 400);
        };

        const userService = new GetUserByIdService();

        const userExists = await userService.getUserById(tag?.user?.id);

        if (!userExists) {
            throw new ApiError(`Usuário informado ID(${tag?.user?.id}) não encontrado!`, 400);
        };

        const createdTag = await tagRepository.save(tag);

        return createdTag;
    };
};