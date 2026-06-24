import mongoose from "mongoose";
import dotenv from "dotenv";

const dbConnect = async () => {
    try {
        const connections = await mongoose.connect(`${process.env.MONGODB_URI}/pool_managment`)
        
        console.log(`${connections.connection.host}`)
    } catch (error) {
        console.log("CONNECTION TO DATABASE FAILED",error)
        console.log(`${process.env.MONGODB_URI}/pool_managment`)
        process.exit(1)
    }
}

export default dbConnect