"use client"
import { signOut } from 'next-auth/react'
import { useSession } from "next-auth/react"
import { redirect } from "next/navigation"
import useCurrentUser from "../../../hooks/useCurrentUser"
import Navbar from '@components/Navbar'
import BillBoard from '@components/Billboard'
import MovieList from '@components/Movielist'
import useMovieList from "../../../hooks/useMovieList"

export default function Home()  {

    const { data: session } = useSession({
        required: true,
        onUnauthenticated() {
            redirect('/api/auth/signin')
        }
    })
    const { data: user } = useCurrentUser();
    const { data: movies = [] } = useMovieList();


    return (
        <>
        <Navbar />
        <BillBoard />
        <div className="pb-40">
                <MovieList title="Trending Now" data={movies} />
        </div>
        <div className='h-screen w-screen flex justify-center items-center'>
            <button className='h-10 w-32 bg-white' onClick={() => signOut({ callbackUrl: '/login' })}>Logout!</button>
        </div>
        </>
    )
}