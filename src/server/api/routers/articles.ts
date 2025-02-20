import { getArticle, listArticles, upVoteArticle } from "./procedures/articles.procedures";
import { createTRPCRouter } from "../trpc";

export const articleRouter = createTRPCRouter({
listArticles,
upVoteArticle,
getArticle
});

export type ArticleRouter = typeof articleRouter;