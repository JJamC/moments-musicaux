import { api } from "~/trpc/react"

    interface VoteButtonProps {
        id: number 
    }

export default function VoteButton(props: VoteButtonProps) {
    const { id } = props
    const handleVote = async () => {
        try {
       await api.article.upVoteArticle.useMutation().mutateAsync({id})
        }
        catch(err) {
            console.log(err);
        }
    }
    return <button
    onClick={handleVote}>
        Upvote
    </button>
}