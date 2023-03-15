import { ApiError } from '../../../helpers/apiErrors';

const multerConfig = {
    limits: {
        fileSize: 2 * 1024 * 1024
    },
    fileFilter: (req: any, file: any, cb: any) => {
        const allowedMimes = [
            'image/jpeg',
            'image/pjpeg',
            'image/png',
        ]

        if (allowedMimes.includes(file.mimetype)) {
            cb(null, true);
        } else {
            cb(new ApiError(`Formato de imagem não suportado!`, 400))
        }
    }
};

export { multerConfig };