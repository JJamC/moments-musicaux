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

  return (<div>
  <form className="h-100 w-100"
  onSubmit={(e) => {handleCommentPost(e)}}>
    <input
    className="text-black"  
    name="comment"
    value={commentBody}
    onChange={(e) => {
        setCommentBody(e.target.value)
    }}
    required
    />
    <br></br>
    <button type="submit">Post Comment</button>
  </form>
  </div>)
}
