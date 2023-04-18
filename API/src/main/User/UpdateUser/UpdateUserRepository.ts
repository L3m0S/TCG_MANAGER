import { AppDataSource } from "../../../database/conection";
import { User } from "../../../entities/User.entity";


export const UpdateUserRepository = AppDataSource.getRepository(User).extend({

})