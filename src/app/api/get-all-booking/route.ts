import { dbConnect } from "@/lib/dbConnect";
import BookRoom from "@/models/BookRoom";

export async function GET(){
    await dbConnect();
    try {
        const getBookinguser=await BookRoom.find({status:""});
        
        if(!getBookinguser){
            return Response.json({
                title:"error",
                message:"no user"
            },{status:400})
        }else{
            // console.log(getBookinguser);
           return Response.json({
            title:"success",
            message:"user found",
            guests:getBookinguser
           })
        }
    } catch (error) {
        console.log(error)
        return Response.json({
            title:"error",
            message:"intenal error"
        },{status:500})
    }

}