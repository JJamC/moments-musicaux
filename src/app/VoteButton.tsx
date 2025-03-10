import { useState } from "react";
import { api } from "~/trpc/react";

interface VoteButtonProps {
    id: number;
    votes: number
}

export default function VoteButton(props: VoteButtonProps) {
    const { id, votes } = props;
    const [renderedVotes, setRenderedVotes] = useState(votes)
    const [hasVoted, setHasVoted ] = useState(false)
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
        <div className="flex items-center space-x-4">
        <button className="p-2 border rounded-full hover:bg-gray-100" onClick={handleUpVote}>
        {error ? <p>Vote failed</p> : null}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
            </svg>
        </button>
        <span className="text-2xl font-bold">{renderedVotes}</span>
        <button className="p-2 border rounded-full hover:bg-gray-100" onClick={handleDownVote}>
        {error ? <p>Vote failed</p> : null}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
        </button>
    </div>
    );
}
