import { AppDataSource } from "../../../database/connection";
import { User } from "../../../entities/User.entity";


export const UserRepository = AppDataSource.getRepository(User).extend({

})