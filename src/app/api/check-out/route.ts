import { dbConnect } from "@/lib/dbConnect";
import BookRoom from "@/models/BookRoom";



export async function POST(request:Request){
    await dbConnect();
    try {
      
        const {id}=await request.json();
        const user=await BookRoom.findByIdAndUpdate(
            id,
            {$set:{roomnum:"",status:"checked-out",updatedAt:Date.now()}},
            {new :true}
        )
        await user?.save();
    } catch (error) {
        console.log(error)
        return Response.json({
            title:"error",
            message:"internal server error"
        })
    }
}