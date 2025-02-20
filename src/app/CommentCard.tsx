
interface CommentCardProps {
    comment: {
    articleId: number,
    authorId: number,
    body: string,
    createdAt: string,
    id: number,
    votes: number
  }
}

export default function CommentCard(props: CommentCardProps) {
    const {comment} = props

    return(
        <div>
        <section className="border border-solid m-10">
        <h3>{comment.authorId}</h3>
        <p>{comment.body}</p>
        <p>{comment.createdAt}</p>
        <p>Upvotes: {comment.votes}</p>
        </section>
        </div>
    )

}