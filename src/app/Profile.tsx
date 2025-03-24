import { User } from "@prisma/client"


type ProfileProps = {
    user: User
}

export default function Profile({user}:ProfileProps) {





    return (
        <div>
            <section>
                <h3>{user.username}</h3>
                <p>{user.createdAt}</p>
                <img src={user.avatar_url}/>

            </section>
            </div>
    )
}