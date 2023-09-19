import { Request, Response } from "express";
import { UpdateArticlePublishRequestService } from "./UpdateArticlePublishRequestService";


export class UpdateArticlePublishRequestController {

    async updatePublishRequest(req: Request, res: Response) {

        const { newStatus, publisRequestId, message } = req.body;
        const { _user_id } = req.body;

        const updateArticlePublishRequestService = new UpdateArticlePublishRequestService();

        const updatedPublishRequest = await updateArticlePublishRequestService.updatePublishRequest(+publisRequestId, newStatus?.toUpperCase(), +_user_id, message);

        res.json({data: updatedPublishRequest});
    };
};