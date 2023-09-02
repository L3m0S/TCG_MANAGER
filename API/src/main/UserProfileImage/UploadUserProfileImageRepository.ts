import { AppDataSource } from "../../database/connection";
import { UserProfileImage } from "../../entities/UserProfileImage.entity";

export const UploadUserProfileImageRepository = AppDataSource.getRepository(UserProfileImage).extend({

});