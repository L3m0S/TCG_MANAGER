import { ApiError } from "../../../helpers/apiErrors"
import { GetUserByIdService } from "../GetUserById/GetUserByIdService";
import { userRepository } from "../userRepository";

export class DeleteUserService {

    async deleteUser(userId: number, requestUserId: number) {

        if (!userId) {
            throw new ApiError(`Informe o ID do usuário a ser deletado!`, 400);
        };

        const getUserByIdService = new GetUserByIdService();

        const deletedUserExists = await getUserByIdService.getUserById(userId);

        if (!deletedUserExists) {
            throw new ApiError(`Usuário a ser deletado não foi encontrado!`, 400);
        };

        const userRequest = await getUserByIdService.getUserById(requestUserId);

        if (!userRequest || !userRequest.admin) {
            throw new ApiError(`Não possui permissão para deletar usuários!`, 400);
        };

        deletedUserExists.deleted = true;

        const deletedUser = await userRepository.save(deletedUserExists);

        return deletedUser;
    };
};