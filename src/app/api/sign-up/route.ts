import { dbConnect } from "@/lib/dbConnect";
import UserModel from "@/models/User";
import bcrypt from "bcryptjs";
import { SendEmailVerification } from "../resend";

export async function POST(request: Request) {
  await dbConnect();
  const { username, email, password } = await request.json();
  try {
    const ExistingUser = await UserModel.findOne({ email });
    const verificationCode = (
      Math.floor(Math.random() * 900000) + 100000
    ).toString();
    if (ExistingUser) {
      if (ExistingUser.isVeified) {
        return Response.json(
          {
            type: "Error",
            message: "User already exists",
          },
          {
            status: 400,
          }
        );
      } else {
        const hashpassword = await bcrypt.hash(password, 10);
        ExistingUser.password = hashpassword;
        ExistingUser.Code = verificationCode;
        console.log(ExistingUser.Code)
        await ExistingUser.save();
         Response.json(
          {
            success: true,
            message: "User created successfully",
            user: ExistingUser,
          },
          { status: 200 }
        )
      }
    } else {
      const hashpassword = await bcrypt.hash(password, 10);
      const newuser = new UserModel({
        username,
        password: hashpassword,
        Code: verificationCode,
        email,
      });
      
   
      await newuser.save();
       Response.json(
        {
          success: true,
          message: "User created successfully",
          user: newuser,
        },
        { status: 200 }
      )
    }
    const SendVerificationEmail = await SendEmailVerification(
      username,
      email,
      verificationCode
    );
    
    if (!SendVerificationEmail) {
      return Response.json(
        {
          success: false,
          message: "Fail to send email",
        },
        { status: 401 }
      );
    } else {
      return Response.json(
        {
          success: true,
          message: "Email sent successfully",
          user:username
        },
        { status: 200 }
      );
    }
  } catch (error) {
    console.log(error);
    return Response.json(
      {
        type: "Error",
        message: "Internal error",
      },
      {
        status: 500,
      }
    );
  }
}
