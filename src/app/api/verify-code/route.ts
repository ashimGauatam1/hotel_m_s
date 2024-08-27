import { dbConnect } from "@/lib/dbConnect";
import UserModel from "@/models/User";

export async function POST(request: Request) {
  await dbConnect();
  try {
    const { username, code } = await request.json();
    const decodedUsername = decodeURIComponent(username)
    const findingUser = await UserModel.findOne({ username:decodedUsername });
    console.log(decodedUsername)
    if (!findingUser) {
      return Response.json(
        {
          title: " error",
          message: "Error while finding user",
        },
        { status: 404 }
      );
      
    } else {
      if (code == findingUser.Code) {
        findingUser.isVeified = true;
        findingUser.save()
        return Response.json(
            {
              title: " success",
              message: "verification successful",
            },
            { status: 200 }
          );
         
      } else {
        return Response.json(
          {
            title: " error",
            message: "You enter wrong code",
          },
          { status: 404 }
        );
      }
    }
  } catch (error) {
    console.log(error);
    return Response.json({
      title: "internal error",
      message: "internal server error",
    });
  }
}
