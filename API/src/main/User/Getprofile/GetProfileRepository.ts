import { AppDataSource } from "../../../database/conection";
import { User } from "../../../entities/User.entity";


export const GetProfileRepository = AppDataSource.getRepository(User).extend({
})