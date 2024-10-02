import mongoose from "mongoose";

const connectDB = async (DATABASE_URL) =>{
    try {
       await mongoose.connect(DATABASE_URL);
        console.log("database connect");
        

    } catch (error) {
        console.error("error encountered:",error)   
    }
}     

export default connectDB;