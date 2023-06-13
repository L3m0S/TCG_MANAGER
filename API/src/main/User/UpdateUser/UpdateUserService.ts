import { Not } from "typeorm";
import { User } from "../../../entities/User.entity";
import { ApiError } from "../../../helpers/apiErrors";
import { UpdateUserRepository } from "./UpdateUserRepository";

export class UpdateUserService {

    async updateUser(user: User, authenticatedUserId: number) {

        const authenticatedUser = await UpdateUserRepository.findBy({ id: authenticatedUserId });

        if (!authenticatedUser) {
            throw new ApiError(`Usuario logado não encontrado!`, 404);
        };

        const userToBeUpdated = await UpdateUserRepository.findBy({ id: user.id });

        if (!userToBeUpdated) {
            throw new ApiError(`Usuário a ser atualizado não encontrado!`, 404);
        }

        if ((authenticatedUserId !== user.id)) {// implementar admin depois
            throw new ApiError(`Não é possivel atualizar outros usuarios!`, 401)
        }

        if (!user.email) {
            throw new ApiError(`Informe o e-mail!`, 400);
        };

        if (!user.name) {
            throw new ApiError(`Informe o nome!`, 400);
        };

        if (!user.user_name) {
            throw new ApiError(`Informe o nome de usuário!`, 400);
        };

        if (user.password) {
            throw new ApiError(`Não é possivel atualizar a senha!`, 400);
        };

        if (user.admin) {
            throw new ApiError(`Não é possivel atualizar o status de administrador!`, 400);
        };

        const emailAlreadyExist = await UpdateUserRepository.findOneBy({ email: user.email, id: Not(user.id) });

        if (emailAlreadyExist) {
            throw new ApiError(`E-mail já utilizado!`, 400);
        };

        const userNameAlreadyExist = await UpdateUserRepository.findOneBy({ user_name: user.user_name, id: Not(user.id) });

        if (userNameAlreadyExist) {
            throw new ApiError(`Nome de usuário já utilizado!`, 400);
        };

        const userUpdated = await UpdateUserRepository.save(user);

        return userUpdated;
    }
}