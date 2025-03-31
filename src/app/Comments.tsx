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

  if (isLoading) return <p>loading...</p>;

  if (isError) return <div>Error: {error?.message}</div>;

  return (
    <div>
      <CommentPost
        articleId={id}
      />
      <ul>
      {comments?.map((comment) => {
        return <CommentCard comment={comment} key={comment.id} />;
      })}
      </ul>
    </div>
  );
}
