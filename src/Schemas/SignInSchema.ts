import { z } from "zod";

export const SignInSchema = z.object({
  username: z
    .string()
    .min(5, { message: "Username Should be atleast 5 character" })
    .max(15, { message: "Username Should be atleast 5 character" })
    .regex(/^[a-zA-Z0-9_]{3,16}$/),
  email: z.string(),
  password: z
    .string()
    .min(5, { message: "password Should be atleast 5 character" })
    // .regex(
    //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
    // ),
});
