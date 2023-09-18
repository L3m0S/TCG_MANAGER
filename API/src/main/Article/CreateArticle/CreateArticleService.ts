import { Article } from "../../../entities/Article.entity";
import { ArticleImage } from "../../../entities/ArticleImage.entity";
import { ApiError } from "../../../helpers/apiErrors";
import { IFile } from "../../../interfaces/fileInterface";
import { UploadArticleImageService } from "../../ArticleImage/UploadArticleImage/UploadArticleImageService";
import { GetUserByIdService } from "../../User/GetUserById/GetUserByIdService";
import { ArticleListService } from "../ArcticleList/ArticleListService";
import { ArticleRepository } from "../ArticleRepository";
import { CreateArticleRepository } from "./CreateArticleRepository";

interface IArticleImage extends ArticleImage {
    string64: string;
};
interface IArticle extends Article {
    uploadImages?: IArticleImage[];
};

export class CreateArticleService {

    async createArticle(article: IArticle) {

        if (article?.id) {
            throw new ApiError(`Não é permitido editar artigos!`, 400);
        };

        if (article?.content?.length === 0) {
            throw new ApiError(`Preencha o conteúdo do artigo!`, 400);
        };

        if (!article?.title) {
            throw new ApiError(`Informe o titulo do artigo!`, 400);
        };

        if (!article?.description) {
            throw new ApiError(`Informe uma descrição para o artigo!`, 400);
        };

        if (!article?.user?.id) {
            throw new ApiError(`Informe o usuário criador do artigo!`, 400);
        };

        const getUserByIdService = new GetUserByIdService();

        const userExists = await getUserByIdService.getUserById(+article?.user?.id);

        if (!userExists) {
            throw new ApiError(`Usuário criador do artigo não encontrado!`, 400);
        };

        const createdArticle = await CreateArticleRepository.save(article);

        const imageService = new UploadArticleImageService();
        const imgs = [];

        if (article?.uploadImages) {
            for (const image of article?.uploadImages!) {
                image.article = new Article();
                image.article.id = createdArticle.id;
                imgs.push(await imageService.uploadImage(image));
            };
        };

        return createdArticle;
    };
};