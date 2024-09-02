"use client"
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import React from 'react'

const page = () => {
  const {data:session}=useSession()
  const user=session?.user
  const router=useRouter()
  return (
   <>
   {
    user?.role!="staff"? <>
    {router.replace('/')}
    </>:
    <>
    <h1>you are a staff</h1>
    </>
   }
   </> 
  )
}

export default page