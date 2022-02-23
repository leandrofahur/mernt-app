import { User } from '@models/User';
import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import 'dotenv/config';

type AuthenticateUserProps = { email: string; password: string };

class AuthenticateUserService {
    public async execute({ email, password }: AuthenticateUserProps) {
        const userExists = await User.findOne({ email });
        if (!userExists) {
            throw new Error('Invalid credentials');
        }

        const isPasswordDifferent = await compare(password, userExists.password);

        if (isPasswordDifferent) {
            throw new Error('Invalid credentials');
        }

        const token = sign(
            {
                email: userExists.email,
            },
            process.env.JWT_SECRET_KEY as string,
            {
                subject: userExists.id,
                expiresIn: '1d',
            },
        );

        return token;
    }
}

export { AuthenticateUserService };
