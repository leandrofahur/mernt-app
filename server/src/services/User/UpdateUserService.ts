import { User, UserProps } from '@models/User';
import { hash, compare } from 'bcrypt';

type ExtendedUserProps = { readonly id: string; old_password: string } & UserProps;

class UpdateUserService {
    public async execute({
        id,
        username,
        email,
        password,
        old_password,
        company,
        bio,
        links,
        skills,
    }: ExtendedUserProps) {
        const user = await User.findById(id);
        if (!user) {
            throw new Error('Invalid credentials');
        }

        if (password && !old_password) {
            throw new Error('Old password is required');
        }

        if (password && old_password) {
            const isPasswordDifferent = compare(password, old_password);

            if (!isPasswordDifferent) {
                throw new Error('New password must be different from old password');
            }
        }

        const newEncryptedPassword = await hash(password, 8);

        const updatedUser = await User.findOneAndUpdate(
            { _id: id },
            {
                $set: {
                    username,
                    email,
                    password: newEncryptedPassword,
                    company,
                    bio,
                    links,
                    skills,
                },
            },
            { new: true },
        );

        return 'Update successful!';
    }
}

export { UpdateUserService };
