import { ApiError } from "../../../helpers/apiErrors";
import { GetProfileRepository } from "./GetProfileRepository";

export class GetProfileService {
  async getProfile(userId: number) {
    if (!userId) {
      throw new ApiError(`ID não informado!`, 400);
    }

    const user = await GetProfileRepository.createQueryBuilder("user").select([
      "user.id", "user.name", "user.email", "user.user_name", "user.experience_level"
    ]).where("user.id = :id", {id: userId}).getOne();

    if (!user) {
      throw new ApiError(`Usuario não encontrado!`, 404);
    }

    return user;
  }
}
