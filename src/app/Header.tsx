"use client"
import { useAuth } from "./context/UserContext";
import Link from "next/link";

export default function Header() {

    const { isUser } = useAuth();

    return (
        <>
    <h1 className="float-left">Moments Musicaux</h1>
        {isUser?
        <Link href={"/login"}>
        <a><p>Logout</p></a>
        </Link>
    :
    <Link href={"/login"}>
    <p>Login</p>
    </Link>}
    </>
    )
}