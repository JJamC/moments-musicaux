"use client";

import { useState } from "react";
import { CommentMutationType } from "./Comments";

interface CommentState {
    articleId: number,
    authorId: number,
    body: string,
    createdAt: string,
    id: number,
    votes: number
}

interface CommentStateToPost {
  articleId: number,
  authorId: number,
  body: string
}

interface CommentPostProps {
  articleId: number;
  authorId: number;
  commentMutation: CommentMutationType
}

export default function CommentPost(props: CommentPostProps) {
  const { articleId, authorId, commentMutation} = props;
  // const [commentToPost, setCommentToPost] = useState<CommentStateToPost>({
  //   articleId: articleId,
  //   authorId: authorId,
  //   body: ""
  // })
  const [commentBody, setCommentBody] = useState("");

  const commentToPost = {
      articleId,
      authorId,
      body: commentBody,
  }

  const handleCommentPost = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  console.log(commentToPost);
  
  await commentMutation.mutateAsync(commentToPost)
  setCommentBody("")
}

  return (
            <div className="w-full flex-col items-center justify-center items-start gap-8 flex">
                <form
  onSubmit={(e) => {handleCommentPost(e)}}>
            <input type="text"
                className="w-full py-3 px-5 rounded-lg border border-gray-300 bg-white shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none text-gray-900 placeholder-gray-400 text-lg font-normal leading-relaxed"
                placeholder="Leave a comment..."
                name="comment"
                value={commentBody}
                onChange={(e) => {
                    setCommentBody(e.target.value)
                }}
                required/>
              <button type="submit"
                 className="w-full py-3 px-5 rounded-lg border border-gray-300 bg-white shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none text-gray-900 placeholder-gray-400 text-lg font-normal leading-relaxed"
              >Post Comment</button>
              </form>
        </div>
  )
}
