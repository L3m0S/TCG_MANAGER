import { Request, Response } from "express";
import { storage } from "../cloudStorageConnection";


export class UploadImageController {

    async uploadImage(req: Request, res: Response) {
        console.log(req.files)
    }
}