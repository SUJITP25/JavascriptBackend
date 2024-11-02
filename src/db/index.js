import mongoose from "mongoose"
import { DB_NAME } from "../constants"

const connectDB = async() =>{
    try{
       const conenctionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
       console.log(`\n MONGODB connected !! DB HOST ${conenctionInstance.connection.host}`);
       
    }catch(error){
        console.log(error);
        process.exit(1)
    }
}

export default connectDB