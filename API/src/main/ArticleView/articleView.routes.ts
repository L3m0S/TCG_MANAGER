import { Router } from "express";
import { ensureAuthenticated } from "../../middlewares/ensureAuthenticated";
import { SaveArticleViewController } from "./SaveArticleView/SaveArticleViewController";
import { ArticleViewProducer } from "../../queues/articleViews/Producer/ArticleViewProducer";
import { GetArticleViewController } from "./GetArticleView/GetArticleViewController";

async function initializeControllers() {
    const articleViewProducer = await (new ArticleViewProducer()).build();
    return new SaveArticleViewController(articleViewProducer);
};

const getArticleViewController = new GetArticleViewController();

export default async (router: Router): Promise<void> => {
    const controller = await initializeControllers();
    const articleViewRouter = Router();

    router.use('/article-view', articleViewRouter);

    articleViewRouter.post(
        "/:articleId/:userId",
        ensureAuthenticated,
        controller.saveArticleView
    );

    articleViewRouter.get(
        "/:articleId",
        getArticleViewController.getArticleViews
    );
};