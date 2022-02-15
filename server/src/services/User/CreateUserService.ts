import { User, UserProps } from '@models/User';
import { hash } from 'bcrypt';

class CreateUserService {
    public async execute({ username, email, password, company, bio, links, skills }: UserProps) {
        if (!email) {
            throw new Error('Incorrect credentials');
        }

        const userExists = await User.findOne({ email });
        if (userExists) {
            throw new Error('User already exists');
        }

        const hashedPassword = await hash(password, 8);

        const newUser = new User({
            username,
            email,
            password: hashedPassword,
            company,
            bio,
            links,
            skills,
        });

        await newUser.save();
        return newUser;
    }
}

export { CreateUserService };
