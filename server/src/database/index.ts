import mongoose from 'mongoose';
import 'dotenv/config';

export async function connectDB() {
    try {
        await mongoose.connect(process.env.MONGODB_URI as string);
        console.log('MongoDB connected...');
    } catch (error: any) {
        console.error(error.message);
        process.exit(1);
    }
}
