"use client"
import { signOut } from 'next-auth/react'
import { useSession } from "next-auth/react"
import { redirect } from "next/navigation"
import useCurrentUser from "../../../hooks/useCurrentUser"
import Navbar from '@components/Navbar'
import BillBoard from '@components/Billboard'

export default function Home()  {

    const { data: session } = useSession({
        required: true,
        onUnauthenticated() {
            redirect('/api/auth/signin')
        }
    })
    const { data: user } = useCurrentUser();

    return (
        <>
        <Navbar />
        <BillBoard />
        <div className='h-screen w-screen flex justify-center items-center'>
            <button className='h-10 w-32 bg-white' onClick={() => signOut({ callbackUrl: '/login' })}>Logout!</button>
        </div>
        </>
    )
}