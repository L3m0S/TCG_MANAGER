import  { Router } from "express";
import { UploadArticleThumbailController } from "./CreateArticleThumbnail/UploadArticleThumbnailController";
import { DeleteArticleThumbnailController } from "./DeleteArticleThumbnail/DeleteArticleThumbailController";

const uploadArticleThumbnailController = new UploadArticleThumbailController();
const deleteArticleThumbnailController = new DeleteArticleThumbnailController();

export default (router: Router): void => { 
    const articleThumbnailRouter = Router();
    router.use('/article-thumbnail',  articleThumbnailRouter);

    articleThumbnailRouter.post(
        "/",
        uploadArticleThumbnailController.uploadArticleThumbnail
    );

    articleThumbnailRouter.delete(
        "/:thumbnailId",
        deleteArticleThumbnailController.deleteArticleThumbnail
    );
}; 