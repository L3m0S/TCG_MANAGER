import { Router } from "express";
import { ensureAuthenticated } from "../../middlewares/ensureAuthenticated";
import { SaveArticleViewController } from "./SaveArticleView/SaveArticleViewController";

const saveArticleViewController = new SaveArticleViewController();

export default (router: Router): void => {
    const articleViewRouter = Router();
    router.use('/article-view', articleViewRouter);

    articleViewRouter.post(
        "/:articleId/:userId",
        saveArticleViewController.saveArticleView
    );

};