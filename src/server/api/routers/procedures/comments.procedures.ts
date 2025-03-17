import { z } from "zod";
import { publicProcedure } from "../../trpc";
import { deleteComment, findCommentsById, postComment } from "../models/comments.model";

interface CommentResponse {
  id: number,
  articleId: number,
  authorId: number,
  body: string
  votes: number,
  createdAt: string,
}


export const listCommentsByArticle = 
publicProcedure
.input(z.object({ id: z.number()}))
.output(
    z.array(
      z.object({
        id: z.number(),
        articleId: z.number(),
        authorId: z.number(),
        body: z.string(),
        votes: z.number(),
        createdAt: z.string(),
      })
    )
  )
  .query(async (opts) => {
    const { input: {id} } = opts
    const comments = await findCommentsById(id)
    return comments
  });

  export const handleCommentPost = 
publicProcedure
.output(
    z.object({
      id: z.number().int(),
      articleId:  z.number().int(),
      authorId:  z.number().int(),
      body: z.string(),
      votes:  z.number().int(),
      createdAt: z.string(),
    })
)
.input(
  z.object({
    articleId: z.number(),
    authorId: z.number(),
    body: z.string(),
  })
)
  .mutation(async(opts) : Promise<CommentResponse> => {
    const { input: {articleId, authorId, body} } = opts
    const newComment = await postComment(articleId, authorId, body )
    return newComment
  })

  export const handleCommentDelete = 
  publicProcedure
  .input(z.object({ id: z.number()}))
  .mutation(async(opts) : Promise<void> => {
    const { input : {id} } = opts
    await deleteComment(id)
  })