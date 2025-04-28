import mongoose, { ConnectOptions } from 'mongoose';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const connectDB = async () => {
    try {
        if (!process.env.DATABASE_URL) {
            throw new Error('DATABASE_URL is not defined in environment variables');
        }
        
        // Define connection options
        const options: ConnectOptions = {
            // No need to specify dbName if it's in your connection string
        };

        const conn = await mongoose.connect(process.env.DATABASE_URL, options);
        
        // Log the connection details
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error: any) {
        console.error(`DB Connection Error: ${error.message}`);
        process.exit(1);
    }
};

export default connectDB;