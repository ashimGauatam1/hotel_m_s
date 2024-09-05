import { dbConnect } from "@/lib/dbConnect";
import BookRoom from "@/models/BookRoom";



export async function POST(request:Request){
    await dbConnect();
    try {
        const {id,roomnum}=await request.json();
        const findRoom=await BookRoom.findById(id);
        if(!findRoom){
            return Response.json({
                title:"error",
                message:"user not found"
            })
        }
        else if(findRoom.paid){
            return Response.json({
                title:"error",
                message:"user already checked in"
            })
        }
        else{
            const updateRoom=await BookRoom.findByIdAndUpdate(id,
                { $set: { roomnum } },
                { new: true } 
            )
            await updateRoom?.save();
            return Response.json({
                title:"success",
                message:"user updated",
                newuser:updateRoom
            })
        }
    } catch (error) {
        console.log(error)
        return Response.json({
            title:"error",
            message:"internal server error"
        })
    }
}