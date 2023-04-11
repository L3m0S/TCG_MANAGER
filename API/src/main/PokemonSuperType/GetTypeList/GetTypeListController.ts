import { Request, Response } from "express";
import { GetSuperTypeListService } from "./GetTypeListService";
import { GetTypeListService } from "../../PokemonType/GetTypeList/GetTypeListService";


export class GetSuperTypeListController {

    async getSuperTypeList(req: Request, res: Response) {

        const getTypeListService = new GetSuperTypeListService();
        const superTypeList = await getTypeListService.getSuperTypeList();

        res.json({ data: superTypeList });
    }
}