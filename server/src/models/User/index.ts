import { Schema, model, Date } from 'mongoose';

export type UserProps = {
    username: string;
    email: string;
    password: string;
    company?: string;
    bio?: string;
    links?: {
        linkedIn?: string;
        github?: string;
        website?: string;
    };
    skills?: [string];
};

// #region Schema
const UserSchema = new Schema<UserProps>({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    company: {
        type: String,
        required: true,
    },
    bio: {
        type: String,
        required: false,
    },
    links: {
        linkedIn: {
            type: String,
            required: false,
        },
        github: {
            type: String,
            required: false,
        },
        website: {
            type: String,
            required: false,
        },
    },
    skills: {
        type: [String],
        required: false,
    },
});
// #endregion

const User = model<UserProps>('User', UserSchema);
export { User };
