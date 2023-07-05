import { AppDataSource } from "../../../database/connection";
import { User } from "../../../entities/User.entity";


export const CreateUserRepository = AppDataSource.getRepository(User).extend({

})