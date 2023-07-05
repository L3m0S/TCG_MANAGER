import { Request, Response } from "express";
import { VerifyUserTokenService } from "./VerifyUserTokenService";

export class VerifyUserTokenController {

    async verifyUserToken(req: Request, res: Response) {

        const authToken = req?.headers?.authorization!;

        const verifyUserTokenService = new VerifyUserTokenService();

        const profile = await verifyUserTokenService.verifyUserToken(authToken);

        res.json({ data: profile });
    };
};