import nextAuth from "next-auth"
import { authOptions } from "./options"

export const handler=nextAuth(authOptions)

export { handler as GET , handler as POST }