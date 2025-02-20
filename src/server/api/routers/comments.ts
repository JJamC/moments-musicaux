import { listCommentsByArticle } from "./procedures/comments.procedures";
import { createTRPCRouter } from "../trpc";

export const commentRouter = createTRPCRouter({
listCommentsByArticle,
});

export type CommentRouter = typeof commentRouter;