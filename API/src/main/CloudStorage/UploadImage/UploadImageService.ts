import crypto from 'crypto';
import { ApiError } from '../../../helpers/apiErrors';
import { storage } from '../cloudStorageConnection';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';

export class UploadImageService {

    async uploadImage(path: string, file: any): Promise<string> {
        const hash = crypto.randomBytes(16);
        const fileName = `${hash.toString("hex")}-${file.originalname}`;
        const fireStorage = ref(storage, `deck/deck-images/${fileName}`);

        await uploadBytes(fireStorage, file.buffer).catch((err) => {
            throw new ApiError(`${err.message}`, 400);
        });

        const url = await getDownloadURL(fireStorage);

        return url;
    };
};