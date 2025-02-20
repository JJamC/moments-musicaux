import { z } from "zod";
import { publicProcedure } from "../../trpc";
import { findCommentsById } from "../models/comments.model";


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
  