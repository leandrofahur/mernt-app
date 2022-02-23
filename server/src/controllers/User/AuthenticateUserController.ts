import { Request, Response } from 'express';
import { AuthenticateUserService } from '@services/User/AuthenticateUserService';

class AuthenticateUserController {
    public async handle(req: Request, res: Response): Promise<Response> {
        const { email, password } = req.body;

        const authenticateUserService = new AuthenticateUserService();
        const token = await authenticateUserService.execute({
            email,
            password,
        });

        return res.status(200).json(token);
    }
}

export { AuthenticateUserController };
