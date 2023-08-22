import  { Router } from "express";
import { UploadDeckImageController } from "./UploadArticleImage/UploadArticleImageController";

const uploadDeckImageController = new UploadDeckImageController();

export default (router: Router): void => { 
    const articleImageRouter = Router();
    router.use('/article-image',  articleImageRouter);

    articleImageRouter.post(
        "/",
        uploadDeckImageController.uploadImage
    );

    articleImageRouter.delete(
        "/:imageId",
        uploadDeckImageController.uploadImage
    );
}; 