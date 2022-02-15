import { Request, Response } from 'express';
import { CreateUserService } from '@services/User/CreateUserService';

class CreateUserController {
    public async handle(req: Request, res: Response): Promise<Response> {
        const { username, email, password, company, bio, links, skills } = req.body;

        const createUserService = new CreateUserService();
        const user = await createUserService.execute({
            username,
            email,
            password,
            company,
            bio,
            links,
            skills,
        });

        return res.status(200).json(user);
    }
}

export { CreateUserController };
