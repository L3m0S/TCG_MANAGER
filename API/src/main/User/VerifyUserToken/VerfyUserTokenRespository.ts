import { AppDataSource } from "../../../database/connection";
import { User } from "../../../entities/User.entity";


export const VerifyUserTokenRepository = AppDataSource.getRepository(User).extend({

});