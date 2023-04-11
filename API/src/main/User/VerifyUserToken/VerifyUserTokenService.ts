import { Request, Response } from "express";
import { ApiError } from "../../../helpers/apiErrors";
import { verify } from "jsonwebtoken";
import { VerifyUserTokenRepository } from "./VerfyUserTokenRespository";

export class VerifyUserTokenService {

    async verifyUserToken(authToken: string) {

        if (!authToken)
            throw new ApiError(`Não autorizado!`, 401);

        const token = authToken.split(" ")[1];

        try {
            const subject = verify(token, 'teste');
            const userId = subject.sub?.toString()!;
            const user = VerifyUserTokenRepository.findOneBy({ id: +userId });

            if (!user) {
                throw new ApiError(`Usuario não encontrado!`, 404);
            }

            return user;
        } catch (error) {
            throw new ApiError(`Não autorizado!`, 401);
        }

    }
}
