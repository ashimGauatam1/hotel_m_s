import mongoose, { mongo } from "mongoose";

type ConectionObject={
    isConnected?:number
}

const Connection:ConectionObject={}

export async function dbConnect() {
    if(Connection.isConnected){
        console.log("database is already connected")
        return 
    }
    try {
        const db=await mongoose.connect(process.env.MONGO_URL || '')
        Connection.isConnected=db.connections[0].readyState
        console.log("Successfully Connected to database")
    } catch (error) {
        console.log("Error while connecting to database",error)
    }
}