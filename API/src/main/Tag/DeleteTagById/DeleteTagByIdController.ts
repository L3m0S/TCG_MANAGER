import { Request, Response } from "express";
import { DeleteTagByIdService } from "./DeleteTagByIdService";

export class DeleteTagByIdController {

    async deleteTagById(req: Request, res: Response) {

        const { tagId } = req.params;

        const deleteTagByIdService = new DeleteTagByIdService();

        const deletedTag = await deleteTagByIdService.deleteTagById(+tagId);

        return res.json({ data: deletedTag });
    };
};