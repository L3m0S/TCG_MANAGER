import { Router } from "express";
import { ensureAuthenticated } from "../../middlewares/ensureAuthenticated";
import { SaveArticleViewController } from "./SaveArticleView/SaveArticleViewController";
import { ArticleViewProducer } from "../../queues/articleViews/Producer/ArticleViewProducer";

async function initializeControllers() {
    const articleViewProducer = await (new ArticleViewProducer()).build();
    return new SaveArticleViewController(articleViewProducer);
};

export default async (router: Router): Promise<void> => {
    const controller = await initializeControllers();
    const articleViewRouter = Router();

    router.use('/article-view', articleViewRouter);

    articleViewRouter.post(
        "/:articleId/:userId",
        controller.saveArticleView
    );
};