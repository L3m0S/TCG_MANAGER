import { NextFunction, Request, Response } from "express";
import { ApiError } from "../helpers/apiErrors";

const errorHandler = (error: Error & Partial<ApiError>, req: Request, res: Response, next: NextFunction) => {
    const statusCode = error.statusCode ?? 500;
    const errorMessage = error.statusCode ? error.message : 'Internal Server Error';
    console.log(error)
    return res.status(statusCode).json({ message: errorMessage });
}

export { errorHandler };