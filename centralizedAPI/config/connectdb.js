import mongoose from 'mongoose';

const connectDb = async (DATABASE_URL) =>{
    try {
        const DB_OPTIONS = {
            dbName: 'traning'
        };
        await mongoose.connect(DATABASE_URL, DB_OPTIONS);
        console.log("DB Connected");
    } catch (error) {
        console.log(error); 
    }
}

export default connectDb;