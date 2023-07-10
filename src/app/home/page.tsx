"use client"
import { signOut } from 'next-auth/react'
import { useSession } from "next-auth/react"
import { redirect } from "next/navigation"
import useCurrentUser from "../../../hooks/useCurrentUser"
import Navbar from '@components/Navbar'
import BillBoard from '@components/Billboard'
import MovieList from '@components/MovieList'
import useMovieList from "../../../hooks/useMovieList"
import useFavorites from "../../../hooks/useFavorites"

export default function Home()  {

    const { data: session } = useSession({
        required: true,
        onUnauthenticated() {
            redirect('/api/auth/signin')
        }
    })
    const { data: user } = useCurrentUser();
    const { data: favorites = [] } = useFavorites();
    const { data: movies = [] } = useMovieList();


    return (
        <>
        <Navbar />
        <BillBoard />
        <div className="pb-40">
                <MovieList title="Trending Now" data={movies} />
                <MovieList title="My List" data={favorites} />
        </div>
        </>
    )
}