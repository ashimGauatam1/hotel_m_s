import { dbConnect } from "@/lib/dbConnect";
import BookRoom from "@/models/BookRoom";


export async function GET(request:Response){
    await dbConnect();
    try {
         const user=await BookRoom.find({status:"checked-out"});
        return Response.json({
            title:"success",
            message:"guest list",
            guests:user
        })
    } catch (error) {
        console.log(error)
        return Response.json({
            title:"error",
            message:"internal error"
        })
    }
}