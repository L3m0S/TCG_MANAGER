import { AppDataSource } from "../../../database/conection";
import { User } from "../../../entities/User.entity";


export const CreateUserRepository = AppDataSource.getRepository(User).extend({
    
})