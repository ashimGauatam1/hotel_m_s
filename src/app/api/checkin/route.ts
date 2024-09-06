import { dbConnect } from "@/lib/dbConnect";
import BookRoom from "@/models/BookRoom";
import { NextResponse } from "next/server";
import { SendEmailVerification, SendRoomVerification } from "../resend";

export async function POST(request: Request) {
  await dbConnect();
  try {
    const { id, roomnum, staff } = await request.json();
    const isAnyFieldEmpty = Object.entries({ id, roomnum, staff }).some(
      ([key, value]) =>
        value === undefined ||
        value === null ||
        (typeof value === "string" && value.trim() === "")
    );

    if (isAnyFieldEmpty) {
      console.error("One or more fields are missing or empty");
      return NextResponse.json(
        {
          title: "error",
          message: "One or more fields are missing or empty",
        },
        { status: 401 }
      );
    }

    const checkroom = await BookRoom.findOne({ roomnum });
    if (checkroom) {
      return Response.json(
        {
          title: "error",
          message: "Room exists",
        },
        { status: 401 }
      );
    }

    const findRoom = await BookRoom.findById(id);
    if (!findRoom) {
      return Response.json(
        {
          title: "error",
          message: "user not found",
        },
        { status: 404 }
      );
    } else if (findRoom.status === "checked") {
      return Response.json({
        title: "error",
        message: "user already checked in",
      });
    } else {
      const updateRoom = await BookRoom.findByIdAndUpdate(
        id,
        { $set: { roomnum, staff } },

        { new: true }
      );
      findRoom.status = "checked";
      // await findRoom.save();
      // await updateRoom?.save();
      console.log(findRoom.email)
      const sendmail =await SendRoomVerification(
        findRoom.name,
        findRoom.email,
        findRoom.checkin,
        findRoom.checkout,
        findRoom.requests,
        findRoom.numberofguests,
        findRoom.roomnum,
        findRoom.status,
        findRoom.roomtype,
        findRoom.amount,
        findRoom.staff,
        findRoom.updatedAt
      );
      console.log(sendmail)
      if (sendmail) {
        return Response.json({
          title: "success",
          message: "user checked in",
          newuser: findRoom,
        });
        
    }else{
        return Response.json({
          title: "error",
          message: "internal server error",
        });
      }
    }
  } catch (error) {
    console.log(error);
    return Response.json({
      title: "error",
      message: "internal server error",
    });
  }
}
