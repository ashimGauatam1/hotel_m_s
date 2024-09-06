import { APIResponse } from "@/types/ApiResponse";
import VerificationEmail from "../../../email/SendVerificationMail";
import { resend } from "@/helpers/resend";
import RoomVerificationEmail from "../../../email/Roomverificationmail";

export async function SendEmailVerification(
  username: string,
  email: string,
  verificationCode: string
): Promise<APIResponse> {
  try {
    const response = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: email,
      subject: " Verification code ",
      react: VerificationEmail({ username, otp: verificationCode }),
    });
    console.log(response);
    return { success: true, message: "verification email send successfully" };
  } catch (error) {
    console.error("Error sending verification email", error);
    return { success: false, message: "failed to send verification email" };
  }
}

export async function SendRoomVerification(
  name: string,
  email: string,
  checkin: Date,
  checkout: Date,
  requests: string,
  numberofguests: string,
  roomnum: string,
  status: string,
  roomtype: string,
  amount: string,
  staff: string,
  updatedAt: Date
): Promise<APIResponse> {
  try {
    const response = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: email,
      subject: " Verification code ",
      react: RoomVerificationEmail({
        name,
        checkin,
        checkout,
        requests,
        numberofguests,
        roomnum,
        status,
        roomtype,
        amount,
        staff,
        updatedAt,
      }),
    });
    console.log(response);
    return { success: true, message: "verification email send successfully" };
  } catch (error) {
    console.error("Error sending verification email", error);
    return { success: false, message: "failed to send verification email" };
  }
}
