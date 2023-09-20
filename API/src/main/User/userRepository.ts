import { AppDataSource } from "../../database/connection";
import { User } from "../../entities/User.entity";

export const userRepository = AppDataSource.getRepository(User).extend({

});