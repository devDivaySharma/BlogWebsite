import mongoose from "mongoose";
import logger from "./logger";

const mongUrl = 'mongodb://root:rootpassword@localhost:27017/blogDB?authSource=admin';

const connectMongoDB = async () => {
    try{
        await mongoose.connect(mongUrl)
        logger.info('Mongo is  connected');
    }catch(err){
        logger.error('Mongo is not connected',err);
    }
} 

export default connectMongoDB;