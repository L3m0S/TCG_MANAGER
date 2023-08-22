import { ArticleImage } from "../../../entities/ArticleImage.entity";
import { ApiError } from "../../../helpers/apiErrors";
import { IFile } from "../../../interfaces/fileInterface";
import { GetArticleByIdService } from "../../Article/GetArticleByid/GetArticleByIdService";
import { UploadImageService } from "../../CloudStorage/UploadImage/UploadImageService";
import { articleImageRepository } from "../ArticleImageRepository";

interface IArticleThumbnail extends ArticleImage {
    string64: string;
};
export class UploadArticleImageService {
    private path = 'deck/deck-images';

    async uploadImage(articleImage: IArticleThumbnail): Promise<ArticleImage> {

        if (!articleImage?.article?.id) {
            throw new ApiError('Informe o artigo vinculado a imagem!', 400);
        };

        const file: IFile = {
            originalName: articleImage?.original_name,
            string64: articleImage?.string64
        };

        const uploadImageService = new UploadImageService();
        const uploadedImage = await uploadImageService.uploadImage(this.path, file);

        const getArticleByIdService = new GetArticleByIdService();

        const articleExists = await getArticleByIdService.getArticleBydId(articleImage?.article?.id);

        if (!articleExists) {
            throw new ApiError('Artigo com o id informado não foi encontrado!', 400);
        };

        const image = new ArticleImage();
        image.url = uploadedImage.url;
        image.article = articleExists;
        image.name = file.originalName;
        image.identifier = file.identifier!;

        const uploadedArticleImage = await articleImageRepository.save(image);

        return  uploadedArticleImage;
    };
};