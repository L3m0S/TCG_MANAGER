import { Request, Response } from "express";
import { CreateArticlePublishRequestService } from "./CreateArticlePublishRequestService";

export class CreateArticlePublishRequestController {

    async createArticlePublishRequest(req: Request, res: Response) {

        const { publishRequest } = req.body;

        const createArticlePublishRequestService = new CreateArticlePublishRequestService();

        const createdPublishRequest = await createArticlePublishRequestService.createArticlePublishRequest(publishRequest);

        res.json({ data: createdPublishRequest});
    };
};