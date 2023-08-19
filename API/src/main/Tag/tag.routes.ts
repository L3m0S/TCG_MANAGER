import { Router } from "express";
import { CreateTagController } from "./CreateTag/CreateTagController";
import { GetTagListController } from "./GetTagList/GetTagListController";
import { DeleteTagByIdController } from "./DeleteTagById/DeleteTagByIdController";

const createTagController = new CreateTagController();
const getTagListController = new GetTagListController();
const deleteTagByIdController = new DeleteTagByIdController();

export default (router: Router): void => {
    const tagRouter = Router();
    router.use('/tag', tagRouter);

    tagRouter.post(
        "/",
        createTagController.createTag
    );

    tagRouter.get(
        "/",
        getTagListController.getTagList
    );

    tagRouter.delete(
        "/:tagId",
        deleteTagByIdController.deleteTagById
    );
};