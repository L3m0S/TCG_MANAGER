import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { ApiError } from "../../../helpers/apiErrors";
import { UserRepository } from "./AuthenticateUserRepository";

export class AuthenticateUserService {
    async authenticateUser(email: string, password: string): Promise<string> {

        if (!email) {
            throw new ApiError("Informe o e-mail para realizar o login!", 400);
        }

        if (!password) {
            throw new ApiError("Informe a senha para realizar o login!", 400);
        }

        const userExists = await UserRepository.findOne({ where: { email: email }, select: ['id', 'email', 'password'] });

        if (!userExists) {
            throw new ApiError(`Usuário não encontrado!`, 404);
        }

        const passwordMatch = await compare(password, userExists.password);

        if (!passwordMatch) {
            throw new ApiError("Email e/ou senha incorretos!", 401);
        };

        const token = sign({
            email: userExists.email
        }, 'teste', {
            subject: `${userExists.id}`,
            expiresIn: '1d'
        });

        return token;
    }
}