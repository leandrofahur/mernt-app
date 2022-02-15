import { Request, Response } from 'express';
import { FindAllUsersService } from '@services/User/FindAllUsersService';

class FindAllUsersController {
    public async handle(req: Request, res: Response): Promise<Response> {
        const findAllUsersService = new FindAllUsersService();
        const users = await findAllUsersService.execute();

        return res.status(200).json(users);
    }
}

export { FindAllUsersController };
