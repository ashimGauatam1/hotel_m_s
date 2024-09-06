import {z} from 'zod'

export const BookRoomSchema = z.object({
    name:z.string().length(15,{message:"Name should have maximun 15 characters"}),
    address:z
    .string(),
    Phone:z.string()
    .length(10,{message:"Phone number should have 10 number"}),
    email:z
    .string()
    .email({message:"enter a valid email"}),
    
    checkin:z
    .date(),
    checkout:z
    .date(),
    paid:z
    .boolean(),
    requests:z
    .string(),
    numberofguests:z
    .string()
    .length(3,"One room can haave maximum 3 guests"),
    roomnum:z
    .string(),
    status:z
    .string(),
    roomtype:z
    .string()
    
})