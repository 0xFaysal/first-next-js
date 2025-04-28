import mongoose,{ConnectOptions} from 'mongoose';

const connectDB = async () => {
    try {
        if (!process.env.MONGO_URI) {
            throw new Error('MONGO_URI is not defined in environment variables');
        }
        // Define connection options
        const options: ConnectOptions = {
            dbName: 'product',  // Replace with your database name
        };

        const conn = await mongoose.connect(process.env.MONGO_URI, options);
        
        // Log the connection details
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error: any) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
};

export default connectDB;