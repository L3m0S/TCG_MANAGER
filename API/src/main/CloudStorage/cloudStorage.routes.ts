import { Router } from "express";
import { ensureAuthenticated } from "../../middlewares/ensureAuthenticated";
import { multerApp } from "./config/multer";
import { UploadImageController } from "./UploadImage/UploadImageController";

const uploadImageController = new UploadImageController()

export default (router: Router): void => {
    const setRouter = Router();
    router.use('/set', setRouter);

    setRouter.get(
        "/upload",
        multerApp.single('files'),
        uploadImageController.uploadImage
    );
};