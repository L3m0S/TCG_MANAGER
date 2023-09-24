import { User } from "../../../entities/User.entity";
import { ApiError } from "../../../helpers/apiErrors";
import { GetUserByIdRepository } from "./GetUserByIdRepository";


export class GetUserByIdService {

    async getUserById(userId: number): Promise<User> {

        if (!userId) {
            throw new ApiError(`ID não informado!`, 400);
        };

        const user = await GetUserByIdRepository.findOneBy({ id: userId, deleted: false });

        if (!user) {
            throw new ApiError(`Usuario não encontrado!`, 404);
        };

        return user;
    };
};