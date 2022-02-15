import { NextFunction, Request, Response } from 'express';

type checkErrorProps = {
    error: Error;
    req: Request;
    res: Response;
    next: NextFunction;
};

function checkError({ error, req, res, next }: checkErrorProps) {
    if (error instanceof Error) {
        return res.status(400).json({
            error: error.message,
        });
    }

    return res.status(500).json({
        status: 'Error',
        message: 'Internal server error occurred',
    });
}

export { checkError };
