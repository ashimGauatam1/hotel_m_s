import {z} from 'zod'

export const VerifySchema=z.object({
    username:z
    .string()
    .min(5, { message: "Username Should be atleast 5 character" })
    .max(15, { message: "Username Should be atleast 5 character" })
    .regex(/^[a-zA-Z0-9_]{3,16}$/),
    code:z
    .string().length(6,{message:"OTP Code must be 6 number"})
    
})