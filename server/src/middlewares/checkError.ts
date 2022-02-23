import { Response } from 'express';

type checkErrorProps = {
    error: Error;
    res: Response;
};

function checkError({ error, res }: checkErrorProps) {
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
