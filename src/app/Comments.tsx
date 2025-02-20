"use client"
import { api } from "~/trpc/react"
import CommentCard from "./CommentCard"

interface CommentsProps {
    id: number 
}

export function Comments(props: CommentsProps) {
    const {id} = props
    const {data} = api.comment.listCommentsByArticle.useQuery({id: id}) 
    const comments = data
    

    return (
        <div>
        {comments?.map((comment) => {
      return <CommentCard comment={comment} key={comment.id} />;
    })}
    </div>
    )
}