import { z } from "zod";
import { publicProcedure } from "../../trpc";
import { fetchArticle, findArticles, incrementArticleVote, decrementArticleVote } from "../models/articles.model";


export const listArticles = 
publicProcedure.output(
    z.array(
      z.object({
        id: z.number(),
        title: z.string(),
        topicName: z.string(),
        authorId: z.number(),
        body: z.string(),
        createdAt: z.string(),
        votes: z.number(),
        article_img_url: z.string(),
      })
    )
  )
  .query(async () => {
    const articles = await findArticles()
    return articles.map((article) => {
      article.topicName = article.topicName[0]?.toUpperCase() + article.topicName.slice(1)
      //created_at to be formatted
      return article
    })
  });

  export const getArticle = 
  publicProcedure
  .input(z.object({ id: z.number()}))
  .output(
      z.object({
        id: z.number(),
        title: z.string(),
        topicName: z.string(),
        authorId: z.number(),
        body: z.string(),
        createdAt: z.string(),
        votes: z.number(),
        article_img_url: z.string(),
      })
  )
  .query(async (opts) => {
    const { input: {id} } = opts
    const article = await fetchArticle(id)
    article.topicName = article.topicName[0]?.toUpperCase() + article.topicName.slice(1)
    return article
  });


  export const upVoteArticle = 
    publicProcedure
    .input(z.object({ id: z.number()}))
    .mutation(async (opts) => {
      const {input: {id}} = opts
      await incrementArticleVote(id)
    })

  export const downVoteArticle = 
  publicProcedure
  .input(z.object({ id: z.number()}))
    .mutation(async (opts) => {
      const {input: {id}} = opts
      await decrementArticleVote(id)
    })
  