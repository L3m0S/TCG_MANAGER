import { Router } from "express";
import { ArticleListController } from "./ArcticleList/ArticleListController";
import { CreateArticleController } from "./CreateArticle/CreateArticleController";

const articleListController = new ArticleListController();
const createArticleController = new CreateArticleController();

export default (router: Router): void => {
    const deckRouter = Router();
    router.use('/article', deckRouter);

    deckRouter.get(
        "/",
        articleListController.getArticleList
    );

    deckRouter.post(
        "/",
        createArticleController.createArticle
    );
}; 