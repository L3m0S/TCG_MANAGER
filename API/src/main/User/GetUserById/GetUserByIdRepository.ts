import { AppDataSource } from "../../../database/connection";
import { User } from "../../../entities/User.entity";


export const GetUserByIdRepository = AppDataSource.getRepository(User).extend({

});