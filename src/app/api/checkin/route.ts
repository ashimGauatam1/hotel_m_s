import { dbConnect } from "@/lib/dbConnect";
import BookRoom from "@/models/BookRoom";



export async function POST(request:Request){
    await dbConnect();
    try {
        const {id,roomnum,staff}=await request.json();
        const findRoom=await BookRoom.findById(id);
        if(!findRoom){
            return Response.json({
                title:"error",
                message:"user not found"
            })
        }
        else if(findRoom.status==="checked"){
            return Response.json({
                title:"error",
                message:"user already checked in"
            })
        }
        else{
            const updateRoom=await BookRoom.findByIdAndUpdate(id,
                { $set: { roomnum ,staff} },
               
                { new: true } 
            )
            findRoom.status="checked"
            await findRoom.save();
            await updateRoom?.save();
            return Response.json({
                title:"success",
                message:"user updated",
                newuser:findRoom
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