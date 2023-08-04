import crypto from 'crypto';
import { ApiError } from '../../../helpers/apiErrors';
import { storage } from '../cloudStorageConnection';
import { getDownloadURL, ref, uploadString } from 'firebase/storage';
import { IFile } from '../../../interfaces/fileInterface';

export class UploadImageService {

    async uploadImage(path: string, file: IFile): Promise<{ url: string, fileName: string }> {

        if (!path) {
            throw new Error('Informe o caminho a ser salva a imagem!');
        };

        const hash = crypto.randomBytes(16);
        const fileName = `${hash.toString("hex")}-${file.originalName}`;
        const fireStorage = ref(storage, `${path}/${fileName}`);

        const imgString = file.string64.split(',')[1];
        const imgMimeType = file.string64.split(';')[0].split(':')[1];

        await uploadString(fireStorage, imgString, 'base64', { contentType: imgMimeType }).catch((err) => {
            throw new ApiError(`${err.message}`, 500);
        });

        const url = await getDownloadURL(fireStorage);

        return {url, fileName};
    };
};