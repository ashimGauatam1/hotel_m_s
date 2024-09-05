import { dbConnect } from "@/lib/dbConnect";
import BookRoom from "@/models/BookRoom";


export async function GET(){
    await dbConnect();
    try {
        const getAllCheckedGuests=await BookRoom.find({paid:true});
        if(!getAllCheckedGuests){
            return Response.json({
                title:"Error",
                message:"No guests are present"
            })

        }else{
            return Response.json({
                title:"Success",
                message:"all guests who are checked in are here",
                guests:getAllCheckedGuests
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