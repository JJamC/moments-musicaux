"use client"
import { useAuth } from "../context/UserContext";
import { useState } from "react";
import { api } from "~/trpc/react";
import Profile from "../Profile";
import { User } from "@prisma/client";
import Link from "next/link";

interface LoginProps {
        users: {
            id: number,
        createdAt: string,
        username: string,
        email: string,
        avatar_url: string,
        }[]

}

export default function Login(props: LoginProps) {

    const {data: users} = api.user.listUsers.useQuery()

    const [userToFetch, setUserToFetch] = useState("faureG")
    const [loggedInUser, setLoggedInUser] = useState<User>({
        id: 0,
        createdAt: "",
        username: "",
        email: "",
        avatar_url: "",
    })

    const { isUser, userProfile, login, logout } = useAuth();

    const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if(users) {
        const user = users.filter((user) => user.username === userToFetch)[0]
        if(user) {
            login(user)
            setLoggedInUser(user)
        }
            setUserToFetch("")
        }
    }
    
    return (
        <div className="flex min-h-screen flex-col items-center justify-center text-white bg-gradient-to-b from-[#B7C9D2] to-[#5D4B81]">
                        <Link href="/">
        <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow float-left mb-4 ml-4">
  Home
</button>
        </Link>
            <div className="bg-gray-100 bg-opacity-85 text-gray-900 container flex flex-col items-center justify-center gap-12 px-4 py-16">
        {isUser ? 
        <>
        <Profile user={userProfile}></Profile>
        <br/>
        <button 
                    className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
        onClick={logout}>Logout</button>
        </>
        : 
        <form 
        className="flex flex-col text-center"
        onSubmit={(e) => {
            handleLogin(e)}}>
            <label>Username:</label>
            <input 
            className="text-black"  
            type="text"
            value={userToFetch}
            onChange={(e) => {
                setUserToFetch(e.target.value)
            }}
            ></input>
            <br/>
            <label>Password:</label>
            <input 
            className="text-black mb-[10]"  
            type="text"
            value="password"
            onChange={(e) => {
                setUserToFetch(e.target.value)
            }}
            ></input>
            <br/>
            <button 
            className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
            type="submit">Login</button>     
            </form>}
            </div>
          </div>
    )
}