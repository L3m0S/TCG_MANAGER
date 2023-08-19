import { Request, Response } from "express";
import { CreateTagService } from "./CreateTagService";


export class CreateTagController {

    async createTag(req: Request, res: Response) {

        const tag = req.body;

        const createTagService = new CreateTagService();

       const createdTag =  await createTagService.createTag(tag);

       return res.json({ data: createdTag });
    };
};