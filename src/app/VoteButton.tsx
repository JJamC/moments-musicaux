import { useState } from "react";
import { api } from "~/trpc/react";
import { useAuth } from "./context/UserContext";

interface VoteButtonProps {
  id: number;
  votes: number;
}

export default function VoteButton(props: VoteButtonProps) {
  const { id, votes } = props;

  const { isUser } = useAuth();

  const [renderedVotes, setRenderedVotes] = useState(votes);
  const [hasUpVoted, setHasUpVoted] = useState(false);
  const [hasDownVoted, setHasDownVoted] = useState(false);
  const [canVote, setCanVote] = useState(true);
  const [error, setError] = useState(false);

  const upVoteMutation = api.article.upVoteArticle.useMutation();
  const downVoteMutation = api.article.downVoteArticle.useMutation();

  const handleUpVote = async () => {
    try {
      if (!isUser) {
        setCanVote(false);
        return;
      }

      if(hasUpVoted) {
        setRenderedVotes((currVotes) => (currVotes -= 1));
        await downVoteMutation.mutateAsync({ id, decrement: 1 });
        setHasUpVoted(false)
        return
      }

      setCanVote(true);
      setError(false);
      if (hasDownVoted) {
        setRenderedVotes((currVotes) => (currVotes += 2));
        await upVoteMutation.mutateAsync({ id, increment: 2 });
      } else {
        setRenderedVotes((currVotes) => (currVotes += 1));
        await upVoteMutation.mutateAsync({ id, increment: 1 });
      }
      setHasDownVoted(false);
      setHasUpVoted(true);
    } catch (err) {
      setHasUpVoted(false);
      setError(true);
      setRenderedVotes((currVotes) => (currVotes -= 1));
    }
  };

  const handleDownVote = async () => {
    try {
      if (!isUser) {
        setCanVote(false);
        return;
      }

      if(hasDownVoted) {
        setRenderedVotes((currVotes) => (currVotes += 1));
        await upVoteMutation.mutateAsync({ id, increment: 1 });
        setHasDownVoted(false)
        return
      }

      setCanVote(true);
      setError(false);
      setHasDownVoted(true);
      if (hasUpVoted) {
        setRenderedVotes((currVotes) => (currVotes -= 2));
        await downVoteMutation.mutateAsync({ id, decrement: 2 });
      } else {
        setRenderedVotes((currVotes) => (currVotes -= 1));
        await downVoteMutation.mutateAsync({ id, decrement: 1 });
      }
      setHasUpVoted(false);
    } catch (err) {
      setHasDownVoted(false);
      setError(true);
      setRenderedVotes((currVotes) => (currVotes += 1));
    }
  };

  return (
    <div className="flex items-center space-x-4">
      {hasUpVoted ? (
        <button
          className="rounded-full border p-2 bg-gray-100"
          onClick={handleUpVote}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 15l7-7 7 7"
            />
          </svg>
        </button>
      ) : (
        <button
          className="rounded-full border p-2 hover:bg-gray-100"
          onClick={handleUpVote}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 15l7-7 7 7"
            />
          </svg>
        </button>
      )}

      {error ? <p>Vote failed</p> : null}

      <span className="text-2xl font-bold">{renderedVotes}</span>
      {hasDownVoted ? (
        <button
          className="rounded-full border p-2 bg-gray-100"
          onClick={handleDownVote}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      ) : (
        <button
          className="rounded-full border p-2 hover:bg-gray-100"
          onClick={handleDownVote}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      )}
      {error ? <p>Vote failed</p> : null}
      {canVote? null : <p>Please Log in to vote</p>}
    </div>
  );
}
