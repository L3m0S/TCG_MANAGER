import  { Router } from "express";
import { ensureAuthenticated } from "../../middlewares/ensureAuthenticated";
import { UploadDeckImageController } from "./UploadArticleImage/UploadArticleImageController";
import { multerApp } from './../CloudStorage/config/multer';

const uploadDeckImageController = new UploadDeckImageController();

export default (router: Router): void => { 
    const articleImageRouter = Router();
    router.use('/article-image',  articleImageRouter);

    articleImageRouter.post(
        "/",
        uploadDeckImageController.uploadImage
    );

    articleImageRouter.delete(
        "/",
        uploadDeckImageController.uploadImage
    );
}; 