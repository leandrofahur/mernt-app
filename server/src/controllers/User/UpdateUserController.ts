import { Request, Response } from 'express';
import { UpdateUserService } from '@services/User/UpdateUserService';

class UpdateUserController {
    public async handle(req: Request, res: Response) {
        const id = req.params.id;
        const { username, email, password, old_password, company, bio, links, skills } = req.body;

        const updateUserService = new UpdateUserService();
        const response = await updateUserService.execute({
            id,
            username,
            email,
            password,
            old_password,
            company,
            bio,
            links,
            skills,
        });

        return res.status(200).json(response);
    }
}

export { UpdateUserController };
