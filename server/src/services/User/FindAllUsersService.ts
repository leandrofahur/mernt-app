import { User } from '@models/User';

class FindAllUsersService {
    public async execute() {
        const users = await User.find().select('-password');

        if (!users) throw new Error('There are currently no users registred');

        return users;
    }
}

export { FindAllUsersService };
