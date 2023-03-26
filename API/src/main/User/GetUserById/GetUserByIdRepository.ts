import { AppDataSource } from "../../../database/conection";
import { User } from "../../../entities/User.entity";


export const GetUserByIdRepository = AppDataSource.getRepository(User).extend({
    
})