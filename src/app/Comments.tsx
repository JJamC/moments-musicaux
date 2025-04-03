"use client";
import { api } from "~/trpc/react";
import CommentCard from "./CommentCard";
import CommentPost from "./CommentPost";

interface CommentsProps {
  id: number;
}


export type CommentMutationType = ReturnType<typeof api.comment.handleCommentPost.useMutation>;

export function Comments(props: CommentsProps) {

  const { id } = props;
  const { data: comments, isLoading, isError, error } =
    api.comment.listCommentsByArticle.useQuery({ id: id });
    const {data: users} = api.user.listUsers.useQuery()
  
    
    if (isLoading) return <p>loading...</p>;
    
    if (isError) return <div>Error: {error?.message}</div>;
    
      const formattedComments = comments?.map(comment => {
        const user = users?.find(user => user.id === comment.authorId);
        if (user) {
          return {
            ...comment,
            username: user.username,
            avatar_url: user.avatar_url
          };
        } else {
          return comment; // Return the comment without a username if no user is found
        }
      });
    
  return (
    <div>
      <CommentPost
        articleId={id}
      />
      <ul>
      {formattedComments?.map((comment) => {
        return <CommentCard comment={comment} key={comment.id} />;
      })}
      </ul>
    </div>
  );
}
