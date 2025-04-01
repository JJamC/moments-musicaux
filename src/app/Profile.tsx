import { User } from "@prisma/client"


type ProfileProps = {
    user: User
}

export default function Profile({user}:ProfileProps) {





    return (
        <div className="p-2 flex flex-col text-center bg-gradient-to-b from-[#B7C9D2] to-[#5D4B81] md:rounded-s-lg">
            <section>
                <h3>Bienvenue {user.username}!</h3>
                <p>Member since: {user.createdAt}</p>
                <img className="h-100 w-96" src={user.avatar_url}/>

            </section>
            </div>
    )
}