import mongoose from 'mongoose';

export const dbConnection = () => {
    console.log("MONGO_URI:", process.env.MONGO_URI); // Debugging log
    mongoose.connect(process.env.MONGO_URI, {
        dbName: "RESTAURANT",
    }).then(() => {
        console.log("Database connected successfully");
    }).catch(err => {
        console.error(`Database connection failed: ${err.message}`);
    });
};