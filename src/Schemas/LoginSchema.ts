import { z } from "zod";

export const LogInSchema = z.object({
  email: z.string(),
  password: z
    .string()
    .min(5, { message: "password Should be atleast 5 character" })
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
    ),
});
