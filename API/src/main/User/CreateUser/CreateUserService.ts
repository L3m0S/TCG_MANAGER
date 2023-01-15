import { hashSync } from "bcrypt"
import { User } from "../../../entities/User.entity";
import { ApiError } from "../../../helpers/apiErrors";
import { CreateUserRepository } from "./CreateUserRepository";


export class CreateUserService {

    async createUser(email: string, password: string, name: string): Promise<User> {
        if (!email)
            throw new ApiError('Informe o email!', 400);

        if (!password)
            throw new ApiError(`Informe a senha!`, 400);

        if (!name)
            throw new ApiError(`Informe o nome!`, 400);

        const userAlreadyExists = await CreateUserRepository.findOneBy({ email: email});

        if (userAlreadyExists)
            throw new ApiError(`Email já cadastrado!`, 400);
        
        const encryptedPassword = hashSync(password, 5);

        const userCreated = await CreateUserRepository.save({
            email: email,
            password: encryptedPassword,
            name: name
        });

        return userCreated;
    }
}