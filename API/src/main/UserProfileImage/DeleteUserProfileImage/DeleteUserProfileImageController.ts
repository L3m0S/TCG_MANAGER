import { Request, Response } from "express";
import { DeleteUserProfileImageService } from "./DeleteUserProfileImageService";


export class DeleteUserProfileImageController {

    async deleteUserProfileImage(req: Request, res: Response) {
        const { profileImageId } = req.params;

        const deleteUserProfileImageService = new DeleteUserProfileImageService();
        const deletedUserProfile = await deleteUserProfileImageService.deleteUserProfileImage(+profileImageId);

        res.json({ data: deletedUserProfile });
    };
};