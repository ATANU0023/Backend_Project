import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";



const connectDB = async ()=>{
    try {
        
        const connectioinInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${ DB_NAME }`) //connecting to the database (process.env.mongodb_url) means we will get the mongodb url from .env filez  and {db_name} means we will get the db_name from constants.js file. and await means it will wait till the promise is resolved.
        console.log(`\n Mongodb connected :: host: ${connectioinInstance.connection.host}`);

    } catch (error) {
        console.log("MongoDB connection ERROR:",error);
        process.exit(1); // 1 means error // 0 means success
    }
}

export default connectDB; // exporting the function so that we can use it in other files.