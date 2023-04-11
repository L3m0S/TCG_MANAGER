import { AppDataSource } from "../../../database/conection";
import { User } from "../../../entities/User.entity";


export const VerifyUserTokenRepository = AppDataSource.getRepository(User).extend({

})