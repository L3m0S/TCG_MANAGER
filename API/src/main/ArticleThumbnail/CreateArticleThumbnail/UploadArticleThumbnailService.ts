import { ArticleThumbnail } from "../../../entities/ArticleThumbnail.entity";
import { ApiError } from "../../../helpers/apiErrors";
import { IFile } from "../../../interfaces/fileInterface";
import { GetArticleByIdService } from "../../Article/GetArticleByid/GetArticleByIdService";
import { UploadImageService } from "../../CloudStorage/UploadImage/UploadImageService";
import { articleThumbnailRepository } from "../articleThumbnailRepository";

interface IArticleThumbnail extends ArticleThumbnail {
    string64: string;
};

export class UploadArticleThumbailService {
    private path = 'article/thumbnails';

    async uploadArticleThumbnail(articleThumbnail: IArticleThumbnail) {

        if (!articleThumbnail?.article?.id) {
            throw new ApiError(`Informe o artigo!`, 400);
        };

        const articleService = new GetArticleByIdService();
        const articleExists = await articleService.getArticleBydId(articleThumbnail?.article?.id);

        if (!articleExists) {
            throw new ApiError(`Artigo com o ID(${articleThumbnail?.article?.id}) não encontrado!`, 400);
        };

        if (!articleThumbnail?.original_name) {
            throw new ApiError(`Informe o nome da imagem!`, 400);
        };

        if (!articleThumbnail?.string64) {
            throw new ApiError(`Informe a imagem!`, 400);
        };

        const file: IFile = {
            originalName: articleThumbnail?.original_name,
            string64: articleThumbnail?.string64
        };

        const uploadImageService = new UploadImageService();
        const uploadedImage = await uploadImageService.uploadImage(this.path, file);

        articleThumbnail.url = uploadedImage.url;
        articleThumbnail.name = uploadedImage.fileName;

        const uploadedArticleThumbnail = await articleThumbnailRepository.save(articleThumbnail);

        return uploadedArticleThumbnail;
    };
};