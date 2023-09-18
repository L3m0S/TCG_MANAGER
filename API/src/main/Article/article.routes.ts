import { Router } from "express";
import { ArticleListController } from "./ArcticleList/ArticleListController";
import { CreateArticleController } from "./CreateArticle/CreateArticleController";
import { ensureAuthenticated } from "../../middlewares/ensureAuthenticated";
import { UpdateArticleController } from "./UpdateArticle/UpdateArticleController";
import { DeleteArticleController } from "./DeleteArticle/DeleteArticleController";

const articleListController = new ArticleListController();
const createArticleController = new CreateArticleController();
const updateArticleController = new UpdateArticleController();
const deleteArticleController =  new DeleteArticleController();

export default (router: Router): void => {
    const deckRouter = Router();
    router.use('/article', deckRouter);

    deckRouter.get(
        "/",
        ensureAuthenticated,
        articleListController.getArticleList
    );

    deckRouter.post(
        "/",
        ensureAuthenticated,
        createArticleController.createArticle
    );

    deckRouter.put(
        "/",
        ensureAuthenticated,
        updateArticleController.updateArticle
    );

    deckRouter.delete(
        "/:articleId",
        ensureAuthenticated,
        deleteArticleController.deleteArticle
    );
}; 