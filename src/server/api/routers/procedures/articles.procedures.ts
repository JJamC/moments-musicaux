import { z } from "zod";
import { publicProcedure } from "../../trpc";
import { fetchArticle, findArticles, incrementArticleVote, decrementArticleVote } from "../models/articles.model";


export const listArticles = 
publicProcedure
.input(z.object({ topic: z.string(), sortBy: z.string()}))
.output(
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
  .query(async (opts) => {
    const { input: {topic, sortBy} } = opts
    const articles = await findArticles(topic, sortBy)
    return articles.map((article) => {
      const articleCopy = {...article}
      articleCopy.topicName = article.topicName[0]?.toUpperCase() + article.topicName.slice(1)
      return articleCopy
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
    const articleCopy = {...article}
    articleCopy.topicName = article.topicName[0]?.toUpperCase() + article.topicName.slice(1)
    if (articleCopy.createdAt) {
      const dateMatch = articleCopy.createdAt.match(/^(\d{4}-\d{2}-\d{2})/);
      articleCopy.createdAt = dateMatch ? dateMatch[0] : "Date Unknown"; 
    }
    return articleCopy
  });


  export const upVoteArticle = 
    publicProcedure
    .input(z.object({ id: z.number(), increment: z.number()}))
    .mutation(async (opts) => {
      const {input: {id, increment}} = opts
      await incrementArticleVote(id, increment)
    })

  export const downVoteArticle = 
  publicProcedure
  .input(z.object({ id: z.number(), decrement: z.number()}))
    .mutation(async (opts) => {
      const {input: {id, decrement}} = opts
      await decrementArticleVote(id, decrement)
    })
  