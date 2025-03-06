import { downVoteArticle, getArticle, listArticles, upVoteArticle } from "./procedures/articles.procedures";
import { createTRPCRouter } from "../trpc";

export const articleRouter = createTRPCRouter({
listArticles,
upVoteArticle,
downVoteArticle,
getArticle
});

export type ArticleRouter = typeof articleRouter;