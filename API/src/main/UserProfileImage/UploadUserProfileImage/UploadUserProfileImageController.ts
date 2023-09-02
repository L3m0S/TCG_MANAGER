import { Request, Response } from "express";
import { IUserProfileImage } from "../interfaces/userProfileImageInterface";
import { UploadUserProfileImageSerice } from "./UploadUserProfileImageSerivice";

export class UploadUserProfileImageController {

    async uploadImage(req: Request, res: Response) {
        const image: IUserProfileImage = req.body;
        
        const uploadUserProfileImageSerice = new UploadUserProfileImageSerice();
        const deckImage = await uploadUserProfileImageSerice.uploadImage(image);

        res.json({ data: deckImage });
    };
};