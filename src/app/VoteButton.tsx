import { useState } from "react";
import { api } from "~/trpc/react";

interface VoteButtonProps {
    id: number;
    votes: number
}

export default function VoteButton(props: VoteButtonProps) {
    const { id, votes } = props;
    const [renderedVotes, setRenderedVotes] = useState(votes)
    const [error, setError] = useState(false)

    const upVoteMutation = api.article.upVoteArticle.useMutation();
    const downVoteMutation = api.article.downVoteArticle.useMutation()

    const handleUpVote = async () => {
        try {
            setError(false)
            setRenderedVotes((currVotes) => currVotes += 1)
            await upVoteMutation.mutateAsync({ id });
        } catch (err) {
            console.log(err);
            setError(true)
            setRenderedVotes((currVotes) => currVotes -= 1)

        }
    };

    const handleDownVote = async () => {
        try {
            setError(false)
            setRenderedVotes((currVotes) => currVotes -= 1)
            await downVoteMutation.mutateAsync({ id });
        } catch (err) {
            console.log(err);
            setError(true)
            setRenderedVotes((currVotes) => currVotes += 1)

        } 
    }
    

    return (
        <div className="flex flex-col text-center">
            <p>{renderedVotes}</p>
        <button onClick={handleUpVote}>
            Upvote
        </button>
        {error ? <p>Vote failed</p> : null}
        <button onClick={handleDownVote}>
            Downvote
        </button>
        {error ? <p>Vote failed</p> : null}
        </div>
    );
}
