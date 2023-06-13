import { Request, Response } from "express";
import { UpdateUserService } from "./UpdateUserService";

export class UpdateUserController {

    async updateUser(req: Request, res: Response) {

        const { user, user_id } = req.body;

        const updateUserService = new UpdateUserService();

        const updatedUser = await updateUserService.updateUser(user, +user_id);

        res.send({ data: updatedUser });
    }
}