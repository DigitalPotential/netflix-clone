"use client"
import { signOut } from 'next-auth/react'

export default function SignOutButton() {

    return (
        <button className='h-10 w-32 bg-white' onClick={() => signOut({ callbackUrl: '/auth' })}>Logout!</button>
    )
}
