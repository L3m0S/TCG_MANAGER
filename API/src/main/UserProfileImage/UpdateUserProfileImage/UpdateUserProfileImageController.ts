
import { Request, Response } from "express";
import { IUserProfileImage } from "../interfaces/userProfileImageInterface";
import { UpdateUserProfileImageSerice } from "./UpdateUserProfileImageService";

export class UpdateUserProfileImageController {

    async uploadImage(req: Request, res: Response) {
        const image: IUserProfileImage = req.body;
        
        const updateUserProfileImageSerice = new UpdateUserProfileImageSerice();
        const deckImage = await updateUserProfileImageSerice.updateUserProfileImage(image);

        res.json({ data: deckImage });
    };
};