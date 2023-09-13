import { Request, Response } from "express";
import { SaveArticleViewService } from "./SaveArticleViewService";
import { IProducer } from "../../../queues/interfaces/IProducer";

export class SaveArticleViewController {

    private static _producer: IProducer;

    constructor (producer: IProducer) {
        SaveArticleViewController._producer = producer;
    };

    async saveArticleView(req: Request, res: Response) {

        const { articleId, userId } = req.params;

        const saveArticleViewService = new SaveArticleViewService(SaveArticleViewController._producer);

        const articleView = await saveArticleViewService.saveArticleView(+articleId, +userId);

        res.json({ data: articleView });
    };
};