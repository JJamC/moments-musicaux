"use client";
import { api } from "~/trpc/react";
import { useState } from "react";
import { useAuth } from "./context/UserContext";

interface CommentPostProps {
  articleId: number;
}

export default function CommentPost(props: CommentPostProps) {
  const { articleId } = props;

  const [commentBody, setCommentBody] = useState("");
  const [commentError, setCommentError] = useState(false)
  const { userProfile } = useAuth()

  const commentToPost = {
      articleId,
      authorId: userProfile.id,
      body: commentBody,
  }

  const utils = api.useUtils();

  const commentMutation = api.comment.handleCommentPost.useMutation({
    // Invalidate queries upon mutation success to trigger a refetch
    onSuccess: async () => {
      await utils.invalidate();
    },
  });
  const handleCommentPost = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()  
    try{
  await commentMutation.mutateAsync(commentToPost)
    }
    catch(err) {     
      setCommentError(true)
    }
  setCommentBody("")
}

  return (
            <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mb-5">
                <form
  onSubmit={async (e) => {await handleCommentPost(e)}}>
            <textarea 
                className="resize-none text-wrap mb-4 w-full py-3 px-5 rounded-lg border border-gray-300 bg-white shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none text-gray-900 placeholder-gray-400 text-lg leading-relaxed"
                placeholder="Leave a comment..."
                name="comment"
                value={commentBody}
                onChange={(e) => {
                    setCommentBody(e.target.value)
                }}
                required/>
              <button type="submit"
                 className="w-full py-3 px-5 rounded-lg border border-gray-300 bg-white shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none text-gray-900 placeholder-gray-400 text-lg font-normal leading-relaxed"
              >{commentError? "Error: Please Log In": "Post Comment" }</button>
              </form>
        </div>
  )
}
