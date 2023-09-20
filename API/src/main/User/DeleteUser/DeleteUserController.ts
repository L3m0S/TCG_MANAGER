import { Request, Response } from "express";
import { DeleteUserService } from "./DeleteUserService";

export class DeleteUserController {

    async deleteUser(req: Request, res: Response) {

        const { userId } = req.params;
        const { _user_id } = req.body

        const deleteUserService = new DeleteUserService();

        const deletedUser = await deleteUserService.deleteUser(+userId, +_user_id);

        res.json({ data: deletedUser });
    };
};