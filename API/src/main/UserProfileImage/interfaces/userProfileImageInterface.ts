import { UserProfileImage } from "../../../entities/UserProfileImage.entity";

export interface IUserProfileImage extends UserProfileImage {
    string64: string;
    originalName: string;
};