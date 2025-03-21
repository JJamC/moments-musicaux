import { useState } from "react";
import { api } from "~/trpc/react";

interface VoteButtonProps {
    id: number;
    votes: number
}

export default function VoteButton(props: VoteButtonProps) {
    const { id, votes } = props;
    const [renderedVotes, setRenderedVotes] = useState(votes)
    const [hasUpVoted, setHasUpVoted ] = useState(false)
    const [hasDownVoted, setHasDownVoted ] = useState(false)
    const [error, setError] = useState(false)

    const upVoteMutation = api.article.upVoteArticle.useMutation();
    const downVoteMutation = api.article.downVoteArticle.useMutation()

    const handleUpVote = async () => {
        try {
            setError(false)
            setHasDownVoted(false)
            setHasUpVoted(true)
            setRenderedVotes((currVotes) => currVotes += 1)
            await upVoteMutation.mutateAsync({ id });
        } catch (err) {
            setHasUpVoted(false)
            setError(true)
            setRenderedVotes((currVotes) => currVotes -= 1)

        }
    };

    const handleDownVote = async () => {
        try {
            setError(false)
            setHasDownVoted(true)
            setHasUpVoted(false)
            setRenderedVotes((currVotes) => currVotes -= 1)
            await downVoteMutation.mutateAsync({ id });
        } catch (err) {
            setHasDownVoted(false)
            setError(true)
            setRenderedVotes((currVotes) => currVotes += 1)

        } 
    }
    

    return (
        <div className="flex items-center space-x-4">
            {hasUpVoted?  <button className="p-2 border rounded-full hover:bg-gray-100" onClick={handleUpVote} disabled>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
            </svg>
        </button>
            :
            <button className="p-2 border rounded-full hover:bg-gray-100" onClick={handleUpVote}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
            </svg>
        </button>}

        {error ? <p>Vote failed</p> : null}

        <span className="text-2xl font-bold">{renderedVotes}</span>
        {hasDownVoted? <button className="p-2 border rounded-full hover:bg-gray-100" disabled onClick={handleDownVote}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
        </button>
        :
        <button className="p-2 border rounded-full hover:bg-gray-100" onClick={handleDownVote}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
        </button>}
        {error ? <p>Vote failed</p> : null}
    </div>
    );
}
