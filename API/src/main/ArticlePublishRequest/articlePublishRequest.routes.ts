import { Router } from "express";
import { CreateArticlePublishRequestController } from "./CreateArticlePublishRequest/CreateArticlePublishRequestController";
import { ensureAuthenticated } from "../../middlewares/ensureAuthenticated";
import { UpdateArticlePublishRequestController } from "./UpdateArticlePublishRequest/UpdateArticlePublishRequestController";

const createArticlePublishRequestController = new CreateArticlePublishRequestController();
const updateArticlePublishRequestController = new UpdateArticlePublishRequestController();

export default (router: Router): void => {
    const ArticlePublishRequest = Router();
    router.use('/article-publish-request', ArticlePublishRequest);

    ArticlePublishRequest.post(
        "/",
        ensureAuthenticated,
        createArticlePublishRequestController.createArticlePublishRequest
    );

    ArticlePublishRequest.put(
        "/",
        ensureAuthenticated,
        updateArticlePublishRequestController.updatePublishRequest
    );
};