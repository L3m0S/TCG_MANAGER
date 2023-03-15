import { Router } from "express";
import multer from 'multer';
import { multerConfig } from "../../CloudStorage/config/multer";
import { UploadDeckImageController } from "../UploadDeckImage/UploadDeckImageController";
const DeckRouter = Router();

const uploadDeckImageController = new UploadDeckImageController();

DeckRouter.post(
    "/upload-image", 
    multer(multerConfig).single('deckImage'), 
    uploadDeckImageController.uploadImage
)

export {DeckRouter } 