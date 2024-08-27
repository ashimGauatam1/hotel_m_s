import {z} from 'zod'

export const VerifySchema=z.object({
    
    code:z
    .string().length(6,{message:"OTP Code must be 6 number"})
    
})