import 'next-auth'


declare module 'next-auth'{
    interface User{
        _id?:string
        isverified?:boolean
        username?:string
        role?:string
    }
    interface Session{
        user:{
            _id?:string,
            isverified?:boolean
        username?:string
        role?:string
        }
    }
}

declare module 'next-auth/jwt'{
    interface JWT{
        _id?:string,
        isverified?:boolean
        username?:string
        role?:string
    }
}