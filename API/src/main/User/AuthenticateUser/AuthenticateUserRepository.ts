import { AppDataSource } from "../../../database/conection";
import { User } from "../../../entities/User.entity";


export const UserRepository = AppDataSource.getRepository(User).extend({

})