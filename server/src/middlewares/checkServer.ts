import { AppError } from '@errors/AppError';
import { NextFunction, Request, Response } from 'express';

function checkServer(error: Error, req: Request, res: Response, next: NextFunction) {
    if (error instanceof AppError) {
        return res.status(error.statusCode).json({
            status: error.statusCode,
            message: error.message,
        });
    }
    return res.status(500).json({
        status: 500,
        message: 'Internal server error!',
    });
}

export { checkServer };
