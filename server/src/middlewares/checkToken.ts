import { NextFunction, Request, Response } from 'express';

type checkTokenProps = {
    req: Request;
    res: Response;
    next: NextFunction;
};

function checkToken({ req, res, next }: checkTokenProps) {
    return res.status(500).json({
        status: 'Error',
        message: 'Internal server error occurred',
    });
}

export { checkToken };
