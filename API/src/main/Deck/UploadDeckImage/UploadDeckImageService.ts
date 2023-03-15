import { UploadImageService } from "../../CloudStorage/UploadImage/UploadImageService";


export class UploadDeckImageService {
    async uploadImage(path: string, file: any, deckId: string) {
        const uploadImageService = new UploadImageService();
        uploadImageService.uploadImage(path, file);
    }
}