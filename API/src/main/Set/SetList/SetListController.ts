import { Request, Response } from "express";
import { SetListService } from "./SetListService";

export class SetListController {

    async getSetList(req: Request, res: Response) {

        const page = req?.query?.page ?? 1;
        const pageSize = req?.query?.pageSize ?? 20;
        const searchParams = req?.query?.searchParams ?? '';
        const orderByParams = req?.query?.orderBy ?? '';

        const setListService = new SetListService();
        const setList = await setListService.getSetList(+page, +pageSize, `${searchParams}`, `${orderByParams}`);

        return res.json({ data: setList });
    }
}