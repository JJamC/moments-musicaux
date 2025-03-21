"use client"
import { useAuth } from "../context/UserContext";
import { useState } from "react";

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

    const { users } = props

    const [userToFetch, setUserToFetch] = useState("")

    const { isUser, userProfile, login, logout } = useAuth();

    const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const user = users.filter((user) => user.username === userToFetch)[0]
        if(user) {
            login(user)
        }
        setUserToFetch("")
        console.log(user);
        console.log(userProfile);
    }
    
    return (
        <div>
            <h1>Login</h1>
        {isUser ? 
        <>
        <p>{userProfile.username}</p> 
        <br/>
        <button onClick={logout}>Logout</button>
        </>
        : 
        <form onSubmit={(e) => {
            handleLogin(e)}}>
            <label>Enter your Username here:</label>
            <br/>
            <input 
            className="text-black"  
            type="text"
            value={userToFetch}
            onChange={(e) => {
                setUserToFetch(e.target.value)
            }}
            ></input>
            <br/>
            <button type="submit">Login</button>     
            </form>}
          </div>
    )
}