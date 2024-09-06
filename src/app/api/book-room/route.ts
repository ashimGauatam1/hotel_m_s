import { dbConnect } from "@/lib/dbConnect";
import BookRoom from "@/models/BookRoom";

export async function POST(request:Request) {
  await dbConnect();
  try {
    const {
      name,
      address,
      phone,
      checkin,
      checkout,
      requests,
      numberofguests,
      roomtype,
      amount,

    } =await request.json();
    

    const NewBooking = new BookRoom({
      name,
      address,
      phone,
      checkin,
      checkout,
      requests,
      numberofguests,
      roomtype,
      amount,
    });
    await NewBooking.save()
    return Response.json({
        success: true,
      message: "Submission Successful",
      data:NewBooking
    },{
        status:200
    })
  } catch (error) {
    console.log(error);
    return Response.json({
      success: false,
      message: "Internal error",
    });
  }
}
