"use client"
import { useAuth } from "./context/UserContext";
import Link from "next/link";

export default function Header() {

    const { isUser, login, logout } = useAuth();

    return (
        <>
    <h1 className="float-left">Moments Musicaux</h1>
        {isUser?
        <Link href={"./login"}>
        <p>Logout</p>
        </Link>
    :
    <Link href={"./Login"}>
    <p>Login</p>
    </Link>}
    </>
    )
}