import { ArticleImage } from "../../../entities/ArticleImage.entity";
import { ApiError } from "../../../helpers/apiErrors";
import { IFile } from "../../../interfaces/fileInterface";
import { GetArticleByIdService } from "../../Article/GetArticleByid/GetArticleByIdService";
import { UploadImageService } from "../../CloudStorage/UploadImage/UploadImageService";
import { articleImageRepository } from "../ArticleImageRepository";

export class UploadArticleImageService {
    private path = 'deck/deck-images';

    async uploadImage(file: IFile, articleId: number): Promise<ArticleImage> {

        if (!articleId) {
            throw new ApiError('Informe o artigo vinculado a imagem!', 400);
        };

        const uploadImageService = new UploadImageService();
        const uploadedImage = await uploadImageService.uploadImage(this.path, file);

        const getArticleByIdService = new GetArticleByIdService();

        const articleExists = await getArticleByIdService.getArticleBydId(articleId);

        if (!articleExists) {
            throw new ApiError('Artigo com o id informado não foi encontrado!', 400);
        };

        const image = new ArticleImage();
        image.url = uploadedImage.url;
        image.article = articleExists;
        image.name = file.originalName;
        image.identifier = file.identifier!;

        const articleImage = await articleImageRepository.save(image);

        return articleImage;
    };
};