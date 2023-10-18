import  { Router } from "express";
import { CreateArticleCommentController } from "./CreateArticleComment/CreateArticleCommentController";
import { ensureAuthenticated } from "../../middlewares/ensureAuthenticated";
import { GetArticleCommentListController } from "./GetArticleCommentList/GetArticleCommentListController";

const createArticleComment = new CreateArticleCommentController();
const getArticleCommentListController = new GetArticleCommentListController();

export default (router: Router): void => { 
    const articleCommentRouter = Router();
    router.use('/article-comment',  articleCommentRouter);

    articleCommentRouter.post(
        "/",
        ensureAuthenticated,
        createArticleComment.createArticle
    );

    articleCommentRouter.get(
        "/",
        ensureAuthenticated,
        getArticleCommentListController.getCommentList
    );

}; 