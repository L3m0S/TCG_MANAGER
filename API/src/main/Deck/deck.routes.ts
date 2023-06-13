import { Router } from "express";
import multer from 'multer';
import { multerConfig } from "../CloudStorage/config/multer";
import { UploadDeckImageController } from "./UploadDeckImage/UploadDeckImageController";
import { CreateDeckController } from "./CreateDeck/CreateDeckController";

const uploadDeckImageController = new UploadDeckImageController();
const createDeckController = new CreateDeckController();

export default (router: Router): void => { 
    const deckRouter = Router();
    router.use('/deck', deckRouter);

    deckRouter.post(
        "/upload-image",
        multer(multerConfig).single('deckImage'),
        uploadDeckImageController.uploadImage
    )
    
    deckRouter.post(
        "/",
        createDeckController.createDeck
    )
}; 