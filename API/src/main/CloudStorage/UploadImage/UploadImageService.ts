import crypto from 'crypto';
import { ApiError } from '../../../helpers/apiErrors';

export class UploadImageService {

    async uploadImage(path: string, file: any) {
        const hash = crypto.randomBytes(16);
        const fileName = `${hash.toString("hex")}-${file.originalname}`;
        console.log(fileName);
    }
}