import { z } from "zod";

export const LogInSchema = z.object({
  email: z.string()
  .email({message:"enter a valid email"}),
  password: z
    .string()
    .min(5, { message: "password Should be atleast 5 character" })
  
});
